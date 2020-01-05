from django.contrib import admin

# Register your models here.
from .models import Movie, BookTicket, Cinema, Customer, Payment

# admin.site.register(Movie)
admin.register(Movie)
admin.register(BookTicket)

admin.site.register(Cinema)
admin.site.register(Customer)
admin.site.register(Payment)