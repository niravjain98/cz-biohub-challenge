from django.urls import path
from .views import FibonacciView

urlpatterns = [
    path('fibonacci/', FibonacciView.as_view(), name='fibonacci'),
]
