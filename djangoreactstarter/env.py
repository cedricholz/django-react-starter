from decouple import config


class ENV:
    PROD = "production"
    STAGING = "staging"
    DEV = "development"
    TEST = "test"

    @staticmethod
    def is_prod():
        return config("ENV") == ENV.PROD

    @staticmethod
    def is_not_prod():
        return config("ENV") != ENV.PROD

    @staticmethod
    def is_staging():
        return config("ENV") == ENV.STAGING

    @staticmethod
    def is_not_staging():
        return config("ENV") != ENV.STAGING

    @staticmethod
    def is_dev():
        return config("ENV") == ENV.DEV

    @staticmethod
    def is_not_dev():
        return config("ENV") != ENV.DEV

    @staticmethod
    def is_test():
        return config("ENV") == ENV.TEST

    @staticmethod
    def is_not_test():
        return config("ENV") != ENV.TEST

    @staticmethod
    def current():
        return config("ENV")
