# Random Password Generator

A simple, secure, and user-friendly web-based password generator that creates strong random passwords to help you maintain better security online.

## 🔒 Features

- **Dual Password Generation**: Generates two random passwords simultaneously for comparison
- **Strong Security**: Uses a comprehensive character set including:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z) 
  - Numbers (0-9)
  - Special characters (~`!@#$%^&*()_-+={}[]|:;<>,.?/)
- **12-Character Length**: Generates secure 12-character passwords
- **Clean UI**: Modern dark theme with green accent colors
- **One-Click Generation**: Simple button click to generate new passwords
- **Responsive Design**: Works across different screen sizes

## 🚀 Live Demo

**[Try the Password Generator Live](https://victorke485.github.io/Password-Generator/)**

Alternatively, you can run it locally by opening `index.html` in your web browser.

## 📁 Project Structure

```
randomPasswordGenerator/
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
├── app.js         # Password generation logic
└── README.md      # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox layout
- **Vanilla JavaScript**: Core password generation functionality

## 💻 How to Use

1. Open `index.html` in any modern web browser
2. Click the "Generate passwords" button
3. Two unique 12-character passwords will appear in the green boxes
4. Click the button again to generate new passwords
5. Copy and use the password that best suits your needs

## 🎨 Design Features

- **Dark Theme**: Easy on the eyes with a professional `#1f2937` background
- **Green Accents**: Highlighting important elements with `#10B981` and `#4adf86`
- **Typography**: Bold, clear fonts for better readability
- **Responsive Layout**: Centered design that works on various screen sizes

## ⚡ Technical Implementation

The password generator uses:
- A predefined array of 84 secure characters
- `Math.random()` for cryptographically random selection
- DOM manipulation to display generated passwords
- Event-driven architecture with onclick handlers

## 🔧 Customization

You can easily customize the generator by modifying:

- **Password Length**: Change the loop limit in `app.js` (currently set to 12)
- **Character Set**: Add or remove characters from the `characters` array
- **Styling**: Update colors, fonts, and layout in `style.css`
- **Number of Passwords**: Modify the HTML and JavaScript to generate more passwords

## 📱 Browser Compatibility

This password generator works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## 🔐 Security Note

This generator creates passwords client-side in your browser. No passwords are stored or transmitted over the internet, ensuring your security and privacy.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements or additional features.

## 📄 License

This project is open source and available under the MIT License.

---

**Remember**: Always use unique passwords for different accounts and consider using a password manager to store them securely!
