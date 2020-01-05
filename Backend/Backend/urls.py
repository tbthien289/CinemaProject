from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from rest_framework_mongoengine import routers as merouters

from Cinema import views

# Mongodb
merouter = merouters.DefaultRouter()
merouter.register(r'movies', views.MovieViewSet)
merouter.register(r'booktickets', views.BookTicketViewSet)
# ----
# Sqlite3
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
# router.register(r'movies', views.MovieViewSet)
# router.register(r'booktickets', views.BookTicketViewSet)
router.register(r'cinemas', views.CinemaViewSet)
router.register(r'customers', views.CustomerViewSet)
router.register(r'payments', views.PaymentViewSet)
# ----

urlpatterns = [
    # path('', include(router.urls)),
    path('', include(merouter.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # path('movies2/', views.MovieView.as_view(), name="movies"),
]
