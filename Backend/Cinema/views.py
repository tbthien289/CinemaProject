from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework_mongoengine import viewsets as meviewsets

from Cinema.serializers import UserSerializer, GroupSerializer, MovieSerializer, BookTicketSerializer, CinemaSerializer, CustomerSerializer, PaymentSerializer
from .models import Movie, BookTicket, Cinema, Customer, Payment


# MongoDB
class MovieViewSet(meviewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class BookTicketViewSet(meviewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = BookTicket.objects.all()
    serializer_class = BookTicketSerializer

# -----------------------------------------------------
# Normal DB
class BookTicketViewSet(viewsets.ModelViewSet):
    queryset = BookTicket.objects.all().order_by('id')
    serializer_class = BookTicketSerializer

class CinemaViewSet(viewsets.ModelViewSet):
    queryset = Cinema.objects.all().order_by('id')
    serializer_class = CinemaSerializer

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all().order_by('id')
    serializer_class = CustomerSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all().order_by('id')
    serializer_class = PaymentSerializer
# ----------------------------------------------------
class MovieView(APIView):
    def get(self, request):
        movies = Movie.objects.all()
        # the many param informs the serializer that it will be serializing more than a single article.
        serializer = MovieSerializer(movies, many=True)
        return Response({"movies": serializer.data})

    def post(self, request):
        movie = request.data.get('movie')

        # Create an movie from the above data
        serializer = MovieSerializer(data=movie)

        if serializer.is_valid(raise_exception=True):
            movie_saved = serializer.save()
        return Response({"success": "Movie '{}' created successfully".format(movie_saved.name)})


# class MovieViewSet(viewsets.ModelViewSet):
#     queryset = Movie.objects.all().order_by('name')
#     serializer_class = MovieSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer