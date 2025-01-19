from django.db import models

class Device(models.Model):
    name = models.CharField(max_length=50)
    device_id = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name