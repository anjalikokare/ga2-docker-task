from http.server import HTTPServer, BaseHTTPRequestHandler

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'text/plain')
        # Bypassing localtunnel reminder if possible via headers (though we can't control grader)
        self.send_header('Bypass-Tunnel-Reminder', 'true')
        self.end_headers()
        self.wfile.write(b'24f2002015@ds.study.iitm.ac.in')

httpd = HTTPServer(('localhost', 8080), SimpleHTTPRequestHandler)
print("Server started on port 8080...")
httpd.serve_forever()
