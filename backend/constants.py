
import os

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

COLOR_PLACEHOLDER = (150, 150, 150)

LOCALES = {
    'de': 'Deutsch',
    'hu': 'Hungarian',
    'fr': 'French',
    'en': 'English',
    'nl': 'Nederlands',
    'es': 'Spanish',
    'zh': '简体中文',
    'zh-tw': '台灣繁體中文',
    'ar': 'العربية'
}

MINI_STICKER_AREA_TILE_SIZE = 14
MINI_STICKER_AREA_TILE_GAP = 2
MINI_STICKER_AREA_OFFSET = 20

STICKER_AREA_TILE_SIZE = 30
STICKER_AREA_TILE_GAP = 4
STICKER_AREA_OFFSET = 20

STICKER_CONTOUR_COLOR = (36, 255, 12)
CALIBRATE_MODE_KEY = 'c'
SWITCH_LANGUAGE_KEY = 'l'
TEXT_SIZE = 18

CUBE_PALETTE = 'cube_palette'

E_INCORRECTLY_SCANNED = 1
E_ALREADY_SOLVED = 2
