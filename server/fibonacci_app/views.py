from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Fibonacci
from .serializers import FibonacciSerializer
from .helpers import fibonacci

# This code was written with the assistance of OpenAI's GPT.


class FibonacciView(APIView):
    def post(self, request):
        number = request.data.get('number')

        if not number:
            return Response({"error": "Number not provided"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            number = int(number)
        except ValueError:
            return Response({"error": "Number must be an integer"}, status=status.HTTP_400_BAD_REQUEST)

        if number < 1:
            return Response({"error": "Number must be greater than 0"}, status=status.HTTP_400_BAD_REQUEST)

        fib_sequence, created = Fibonacci.objects.get_or_create(
            number=number,
            defaults={'fibonacci_sequence': ','.join(
                map(str, fibonacci(number)))},
        )

        return Response({"fibonacci_sequence": fib_sequence.fibonacci_sequence}, status=status.HTTP_201_CREATED)
