import requests
from bs4 import BeautifulSoup

category = "sort=newest&subcategory=Web+Development&subcategory=Other+IT+%26+Software&subcategory=Web+Design&subcategory=Network+%26+Security"
#https://www.udemy.com/courses/free/?lang=en&category=sort=newest&subcategory=Web+Development&subcategory=Other+IT+%26+Software&subcategory=Web+Design&subcategory=Network+%26+Security
url = f"https://www.udemy.com/courses/free/"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
}


response = requests.get(url, headers=headers)

#html_test = '<div class="course-list--container--3zcdw">'
soup = BeautifulSoup(response.text, "html.parser")
#ok





courses = soup.find_all("a", {"href":"/course/html-online-course/"})


print("courses =", courses)
for course in courses:
    print("course =", course)
#ok


print("finish")



