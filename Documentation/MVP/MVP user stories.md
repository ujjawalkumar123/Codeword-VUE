MVP 1

1.As a user, I want to register by providing my email ID and password so that I can access my account.
2.As a user, I want to log in with my Email Id and password.
3.As a user, if I forget the password, I want to retrieve my account by entering the registered Email ID and submit it into the system. I should be receiving an email with the temporary password provided by the system. Later I can access my account with the temporary password provided.
4.As a student, I want to see my current courses and acknowledge my random codeword for the respective course on my home page.

MVP 2 (Fri-19-Oct)
1.As an instructor, I want to check an "Instructor?" box when I register so that I can distribute code words. (Required this semester - Dr. Case)
2.As an instructor, I want to see my list of active courses
3.As an instructor, I want to create a new set of code words by entering a unique name for the codeword set and uploading a plain text file that contains a new list of codewords.
4. As an instructor, I want the app to always have my â€œbasic smallâ€ codeword set (with ~90) and a second â€œLarge Codeword Setâ€ with 200 unique codewords and instructors are not allowed to delete them.
5. As an instructor, I want to create a new course by adding a list of students from the first sheet in an plain text file file (containing emails and names in the first 2 columns), selecting a codeword set from a drop-down that shows the name of the set with the calculated count in parenthesis, and setting the start date (default to today) and end date (defaulted to 4 Months after then start date) for the course, and a pre-survey URL, and a post-survey URL. I want the ability to change the survey URL.
6. As an instructor, if I click on â€œView Studentsâ€ I want to see a list of students for the selected course (emails and names) and want to see the calculated count of students in that course.
7.As an instructor, when I view my list of active courses, for each active course, I want to see:
    a. The unique name,
    b. The codeword set name with the calculated count of words,
    c. The start date and the end date,
    d. The pre-survey URL and the post-survey URL
    e. An option to â€œView N Studentsâ€,
    f. An option to â€œEditâ€,
    g. An option to â€œDeleteâ€ an active course (expired courses do not need to be deleted - they just won't appear). 

MVP 3 (Fri-9-Nov)

1. As an instructor, I want one codeword from the specified set to be randomly assigned to only one student and each student must have a unique codeword in that course and each codeword can only be issued once in each course (or not used at all) when a course is created.
2. As an instructor, I want to be notified if the codeword set is too small. If the calculated count of codewords is less than the calculated count of students then I want to see a warning that says â€œYou have n students, but the codeword set has only m words. Please select another set or click the + button next to the codeword dropdown to add a new, larger set of codewords" while creating or editing a course.
3. As an instructor, I want the codewords to be confidential and must not know or be able to see the code word each student gets.
4.As an instructor, I want to see the calculated count of students and codewords when I edit or view a course with the unique name, list of students, codeword set, start and end date. 
5. As an instructor, I want the percentage of students who have accessed their codewords in that course.
6.As an instructor, I want to assign codewords for the concurrent survey in different courses.

GDP2:

1.As an administrator, I want to add new instructors.
2.As an administrator, I want to delete the instructor and the courses related to them.
3.As an administrator, I want to be able to add new sets of codewords.
4.As an instructor, I want to delete a student from a course (e.g. when they drop). 
5.As an instructor, I want to add a student to a course (e.g. when a new student transfers in)
6.As an instructor, I want to create a new course by adding a list of students from plain text file, selecting a codeword set from a drop-down, and setting the start date and end date for the course. 
7.As a user, I want to navigate between multiple pages (Home (list of active courses), + New Course, view a Set of Codewords and Confirm Delete Course).
8.As an instructor, I should be able to search for courses, ordering/sorting of courses.
9.As an Instructor, If I fill the form and select a set of codeword to send those to students, if the number of students in that course is more than the number of codewords in the selected sets, then I should receive a pop up message with a reason to select different codeword set, and after selecting larger codeword set, I should not be asked to fill the previously filled details again.
