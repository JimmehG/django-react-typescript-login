import os

os.environ['ENVIRONMENT'] = 'local'

ENVIRONMENT = os.getenv('ENVIRONMENT')
# ENVIRONMENT = 'development'
# ENVIRONMENT = 'production'

SETTINGS_MODULE = 'backend.settings.local'

if ENVIRONMENT == 'local':
    SETTINGS_MODULE = 'backend.settings.local'
if ENVIRONMENT == 'development':
    SETTINGS_MODULE = 'backend.settings.development'
if ENVIRONMENT == 'production':
    SETTINGS_MODULE = 'backend.settings.production'
