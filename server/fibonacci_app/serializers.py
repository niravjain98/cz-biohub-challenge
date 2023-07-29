from rest_framework import serializers
from .models import Fibonacci


class FibonacciSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fibonacci
        fields = ['number', 'fibonacci_sequence']
