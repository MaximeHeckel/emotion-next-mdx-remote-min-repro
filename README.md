1. Clone the repository
2. Run `yarn`
3. Run `yarn dev`
4. Navigate to http://localhost:3000, the landing page with some styled component should appear. Refreshing the page doesn't cause any issue (it's a basic page, no MDX)
5. Click on `Demo` to navigate to the MDX dependent page, you should see a blue square (styled component)
6. Open the dev tools / console and refresh the page
7. See the error:

```
Prop `dangerouslySetInnerHTML` did not match. Server: "<p>Some <strong>mdx</strong> text, with a component</p><div class=\"css-19ik4h0-Test e19h95rx0\"></div><p>Open the dev tools / console and refresh this page to see the error</p>" Client: "<p>Some <strong>mdx</strong> text, with a component</p><style data-emotion=\"css 19ik4h0-Test\">.css-19ik4h0-Test{background:blue;height:50px;width:200px;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWUvRGV2ZWxvcGVyL2RlbW8tZW1vdGlvbi1uZXh0LW1keC9wYWdlcy9kZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUkwQiIsImZpbGUiOiIvVXNlcnMvbWF4aW1lL0RldmVsb3Blci9kZW1vLWVtb3Rpb24tbmV4dC1tZHgvcGFnZXMvZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHJlbmRlclRvU3RyaW5nIGZyb20gXCJuZXh0LW1keC1yZW1vdGUvcmVuZGVyLXRvLXN0cmluZ1wiO1xuaW1wb3J0IGh5ZHJhdGUgZnJvbSBcIm5leHQtbWR4LXJlbW90ZS9oeWRyYXRlXCI7XG5cbmNvbnN0IFRlc3QgPSBzdHlsZWQoXCJkaXZcIilgXG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuYDtcblxuY29uc3QgY29tcG9uZW50cyA9IHsgVGVzdCB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKHsgc291cmNlIH0pIHtcbiAgY29uc3QgY29udGVudCA9IGh5ZHJhdGUoc291cmNlLCB7IGNvbXBvbmVudHMgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5EZW1vPC9oMT5cbiAgICAgIHtjb250ZW50fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIE1EWCB0ZXh0IC0gY2FuIGJlIGZyb20gYSBsb2NhbCBmaWxlLCBkYXRhYmFzZSwgYW55d2hlcmVcbiAgY29uc3Qgc291cmNlID0gYFxuU29tZSAqKm1keCoqIHRleHQsIHdpdGggYSBjb21wb25lbnRcblxuPFRlc3QgLz5cblxuT3BlbiB0aGUgZGV2IHRvb2xzIC8gY29uc29sZSBhbmQgcmVmcmVzaCB0aGlzIHBhZ2UgdG8gc2VlIHRoZSBlcnJvclxuXG4gIGA7XG4gIGNvbnN0IG1keFNvdXJjZSA9IGF3YWl0IHJlbmRlclRvU3RyaW5nKHNvdXJjZSwgeyBjb21wb25lbnRzIH0pO1xuICByZXR1cm4geyBwcm9wczogeyBzb3VyY2U6IG1keFNvdXJjZSB9IH07XG59XG4iXX0= */</style><div class=\"css-19ik4h0-Test e19h95rx0\"></div><p>Open the dev tools / console and refresh this page to see the error</p>"
```