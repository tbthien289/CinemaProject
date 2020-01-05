# def open_access_middleware(get_response):
#     def middleware(request):
#         response = get_response(request)
#         response["Access-Control-Allow-Origin"] = "*"
#         response["Access-Control-Allow-Headers"] = "*"
#         response["Access-Control-Allow-Methods"] = "*"
#         return response
#     return middleware

class CustomCorsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.

        response = self.get_response(request)
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Headers"] = "*"

        # Code to be executed for each request/response after
        # the view is called.

        return response