
import os
import json
import platform


class Config:

    def __init__(self):
        self.config_dir = os.path.join(self.get_basedir, '.config/qbr')
        self.settings_file = os.path.join(self.config_dir, 'settings.json')

        try:
            self.settings = json.loads(open(self.settings_file, 'r').read())
        except Exception:
            self.settings = {}

        if not os.path.exists(self.config_dir):
            os.mkdir(self.config_dir)

    @property
    def get_basedir(self):
        if platform.system() == 'windows':
            return os.path.expandvars('%appdata%')

        return os.path.expanduser('~')

    def get_setting(self, key, default_value=None):
        if key in self.settings:
            return self.settings[key]
        if default_value is not None:
            return default_value
        return None

    def set_setting(self, key, value):
        self.settings[key] = value
        with open(self.settings_file, 'w') as f:
            json.dump(self.settings, f)
            f.close()

config = Config()
