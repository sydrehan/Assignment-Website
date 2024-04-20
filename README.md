Description:
In this task, the objective is to implement a filtering mechanism for the lab members displayed on the webpage. The filtering will allow users to select specific positions (e.g., PhD, MS(R), UG) and only display members belonging to those positions.

Implementation:
HTML Structure:
Add a select element (dropdown) at the top of the page to allow users to select positions.
Each lab member's information should be wrapped in an element that can be easily targeted for display/hide based on the selected position.
JavaScript Functionality:
Write JavaScript code to handle the change event of the select element.
When the user selects a position, filter the lab members accordingly and display only those members that match the selected position.
If multiple positions are selected, display members belonging to any of the selected positions.
Styling:
Ensure that the filtered lab members are displayed in a visually appealing and organized manner.
Apply CSS styles to differentiate between different positions or highlight the selected position(s).
Testing:
Test the filtering functionality thoroughly to ensure that it works as expected.
Verify that all lab members are displayed when no position is selected.
Check that selecting specific positions correctly filters the displayed members.
Example:
For instance, if a user selects 'PhD', only lab members with the position 'PhD' should be displayed.
If 'PhD' and 'MS(R)' are selected, lab members with either of these positions should be displayed.
When no position is selected, all lab members should be visible.
Additional Notes:
Ensure that the filtering mechanism is user-friendly and intuitive.
Consider providing feedback to the user when no members match the selected position(s).
Test the webpage across different browsers and devices to ensure compatibility and responsiveness.
Files Modified:
index.html: Added select element for position filtering.
app.js: Implemented JavaScript functionality for filtering lab members.
style.css: Applied styles for the filtering UI and the display of lab members.
Future Enhancements:
Implement additional filtering options such as filtering by name or research interests.
Improve the visual presentation of lab members for better user engagement.
Feedback and Suggestions:
Your feedback and suggestions for further improvements are welcome. If you encounter any issues or have ideas for enhancing the filtering functionality, please don't hesitate to reach out.
