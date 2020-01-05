from django.contrib.auth.models import User, Group
from rest_framework import serializers

from rest_framework_mongoengine import serializers as serializers2

from .models import Movie, BookTicket, Cinema, Customer, Payment

class MovieSerializer(serializers2.DocumentSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'name', 'description', 'duration', 'stars', 'types', 'director', 'img')

class BookTicketSerializer(serializers2.DocumentSerializer):
    class Meta:
        model = BookTicket
        fields = ('id', 'idCustomer', 'idMovie', 'time', 'totalPrice')
# class MovieSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Movie
#         fields = ('id', 'name', 'description', 'duration', 'stars', 'types', 'director', 'img')

# ----------------------------------
# class BookTicketSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = BookTicket
#         fields = ('id', 'idCustomer', 'ticketPrice')

class CinemaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cinema
        fields = ('id', 'seat', 'idMovie', 'movieShow')

class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'name')

class PaymentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Payment
        fields = ('id', 'idCustomer', 'amount')
# ----------------------------------
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']