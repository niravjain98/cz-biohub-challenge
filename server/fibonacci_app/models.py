from django.db import models


class Fibonacci(models.Model):
    number = models.IntegerField()
    # or some other field type depending on your use case
    fibonacci_sequence = models.TextField()
