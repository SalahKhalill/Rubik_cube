#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# vim: fenc=utf-8 ts=4 sw=4 et

import numpy as np
import cv2
from helpers import ciede2000, bgr2lab
from config import config
from constants import CUBE_PALETTE, COLOR_PLACEHOLDER

class ColorDetection:

    def __init__(self):
        # Default color values in BGR
        self.prominent_color_palette = {
            'red'   : (0, 0, 255),
            'orange': (0, 165, 255),
            'blue'  : (255, 0, 0),
            'green' : (0, 255, 0),
            'white' : (255, 255, 255),
            'yellow': (0, 255, 255)
        }

        # HSV color ranges for better detection
        self.hsv_color_ranges = {
            'red': [(0, 150, 120), (6, 255, 255)],  # Adjusted range for red
            'orange': [(7, 150, 150), (12, 255, 255)],  # Adjusted range for orange
            'yellow': [(25, 100, 100), (35, 255, 255)],
            'green': [(35, 100, 100), (85, 255, 255)],
            'blue': [(85, 100, 100), (130, 255, 255)],
            'white': [(0, 0, 200), (180, 30, 255)]      # Adjust these ranges
        }
        # Load saved calibration if available
        self.cube_color_palette = config.get_setting(
            CUBE_PALETTE,
            self.prominent_color_palette
        )
        for side, bgr in self.cube_color_palette.items():
            self.cube_color_palette[side] = tuple(bgr)

    def get_prominent_color(self, bgr):
        """Get the prominent color equivalent of the given bgr color."""
        for color_name, color_bgr in self.cube_color_palette.items():
            if tuple([int(c) for c in bgr]) == color_bgr:
                return self.prominent_color_palette[color_name]
        return COLOR_PLACEHOLDER

    def get_dominant_color(self, roi):
        """Get dominant color from ROI using HSV color space."""
        try:
            # Convert to HSV
            hsv = cv2.cvtColor(roi, cv2.COLOR_BGR2HSV)
            
            # Get average HSV values
            h, s, v = cv2.mean(hsv)[:3]
            print(f"Detected HSV: H={h}, S={s}, V={v}")  # Debugging line
            
            # Find matching color range
            for color_name, (lower, upper) in self.hsv_color_ranges.items():
                if (lower[0] <= h <= upper[0] and 
                    lower[1] <= s <= upper[1] and 
                    lower[2] <= v <= upper[2]):
                    return self.cube_color_palette[color_name]
            
            # If no match found, use K-means
            pixels = np.float32(roi.reshape(-1, 3))
            criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 200, .1)
            _, _, palette = cv2.kmeans(pixels, 1, None, criteria, 10, cv2.KMEANS_RANDOM_CENTERS)
            dominant = palette[0]
            return tuple(dominant)
            
        except Exception as e:
            print(f"Error in get_dominant_color: {str(e)}")
            import traceback
            traceback.print_exc()
            return COLOR_PLACEHOLDER

    def get_closest_color(self, bgr):
        """Get closest color using both HSV and Lab color spaces."""
        try:
            # Convert to HSV
            hsv = cv2.cvtColor(np.uint8([[bgr]]), cv2.COLOR_BGR2HSV)[0][0]
            
            # Check HSV ranges first
            h, s, v = hsv
            for color_name, (lower, upper) in self.hsv_color_ranges.items():
                if (lower[0] <= h <= upper[0] and 
                    lower[1] <= s <= upper[1] and 
                    lower[2] <= v <= upper[2]):
                    return {
                        'color_name': color_name,
                        'color_bgr': self.cube_color_palette[color_name],
                        'distance': 0
                    }
            
            # Fallback to Lab color space comparison
            lab = bgr2lab(bgr)
            distances = []
            for color_name, color_bgr in self.cube_color_palette.items():
                distances.append({
                    'color_name': color_name,
                    'color_bgr': color_bgr,
                    'distance': ciede2000(lab, bgr2lab(color_bgr))
                })
            return min(distances, key=lambda item: item['distance'])
            
        except Exception as e:
            print(f"Error in get_closest_color: {str(e)}")
            return {
                'color_name': 'white',
                'color_bgr': self.cube_color_palette['white'],
                'distance': 0
            }

    def convert_bgr_to_notation(self, bgr):
        """
        Convert BGR tuple to rubik's cube notation.
        The BGR color must be normalized first by the get_closest_color method.

        :param bgr tuple: The BGR values to convert.
        :returns: str
        """
        notations = {
            'green' : 'F',
            'white' : 'U',
            'blue'  : 'B',
            'red'   : 'R',
            'orange': 'L',
            'yellow': 'D'
        }
        color_name = self.get_closest_color(bgr)['color_name']
        return notations[color_name]

    def set_cube_color_pallete(self, palette):
        """
        Set a new cube color palette. The palette is being used when the user is
        scanning his cube in solve mode by matching the scanned colors against
        this palette.
        """
        for side, bgr in palette.items():
            self.cube_color_palette[side] = tuple([int(c) for c in bgr])

color_detector = ColorDetection()
