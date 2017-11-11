# RN Primer Notes

## PART 0 - WELCOME

If you have any questions/issues during the session:
* There will be multiple Q&A sessions throughout the event
* Find one of our builders at Airship and they will be more than happy to assist

**_DOWNLOAD REQUIRED SOFTWARE & CREATE ACCOUNT WITH EXPO_**

* Download Expo XDE - https://expo.io/tools
* Create Account

### OUR EXPERIENCE WITH MOBILE DEVELOPMENT
* Native (Swift/Java)
* PhoneGap / Cordova
* React Native

As a team, we started learning React Native about a year ago with a couple of assumptions:
* RN would continue to thrive and and be refined
* It would enhance the user experiences of our apps
* It would cut development time down for cross-platform apps

Months after switching over, here are a few things we saw:
* The community around React & RN is very vibran´t
* Growing pains & bugs of using a relatively new framework are getting smaller each day
* Our apps feel MUCH more native than other hybrid solutions we've used
* Development time was reduced (from native especially, but also PhoneGap)
* 100% of our team can work on our mobile projects

### SCHEDULE FOR TODAY
* Introduction
  * Detail how it’s different from other hybrid app frameworks and the pros/cons
  * Define need-to-know concepts and fundamentals to create an app
  * Provide basics of Expo and how to use
  * Discuss troubleshooting and must-have tools
* React Native Components
  * Demonstrate new and commonly-used ES6/ES7 features
  * Explain basics of JSX
  * Define React Native Components and which ones are key
  * Define React Component Lifecycle methods and their roles
* Building & Styling
  * Outline the app features and start building your first screen!
  * Discuss the similarities and differences between React Native and CSS
  * Walk through styling properties and layout with Flexbox
* Refactor & Finish Building App
  * Build the remainder of our app
  * Summarize differences between functional and class components
  * Discuss STATE and how it’s used to control data shown in app
  * Discuss animations and UI properties

## PART 1 - INTRODUCTION

### WHAT IS REACT NATIVE
* Mobile javascript framework developed by Facebook.
* From https://facebook.github.io/react-native/:
  * React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.
  * A React Native app is a real mobile app
  * With React Native, you don't build a “mobile web app”, an “HTML5 app”, or a “hybrid app”. You build a real mobile app that's indistinguishable from an app built using Objective-C or Java. React Native uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React.

### Who's using React Native?
* Facebook
* Instagram
* Airbnb
* Walmart
* Tesla
* Microsoft
* Amazon

### REACT NATIVE PRECONCEPTIONS
* Just another hybrid framework that “wraps” a website and calls it an app
* Write once, run everywhere
  * RN by default will run on iOS and Android, but it also gives you the option to create unique experiences that are platform specific.
  * Mostly portable from React, but still requires adjustments

### WHAT MAKES RN DIFFERENT
* Based on the JavaScript framework React
* Rendered real native UI components instead of a web view, which helps the app “feel native” (gestures, etc.)
* Better performance than other hybrid solutions
* Over-The-Air updates (CodePush, Expo)
* Easily use native code when required
* Can be used inside a native application

### CONS OF RN
* Not great for high performance apps (physics-based games, etc.)
  * Due to the way the native code communicates with the JavaScript thread
* Requires a general knowledge of how React works
* Keeping app up-to-date with latest RN versions is tough

## REACT NATIVE AT A HIGH LEVEL

### RELATIONSHIP WITH REACT FRAMEWORK

RN uses the same underlying base that React uses, so the workflows & syntax are basically the same.
* Most common javascript libraries used also work with both (Redux, moment, etc.)

### PLATFORMS

iOS & Android
* RN gives the ability to create unique experiences for each, or just use the same

There are currently other experimental libraries that are extending React/RN to web, desktop, VR & more

### NATIVE API

RN exposes a large number of native APIs so you can interact with native modules:
* Alerts, Push Notifications, Geolocation, Camera, Photo Library, etc.

For native modules that aren't currently exposed by RN, there is mostly likely another 3rd party library that does:
* Calendar, Reminders, Maps, etc

### COMPONENTS

Components are the building blocks for your app

RN has multiple common components that can be used

They each use platform-specific native UI
* Ex: `<View />` renders a `UIView` for iOS and `android.view` for Android

### BRIDGE

RN apps are fully native, but contain a JavaScript thread where the logic of the app is run.

The JS thread communicates with the native code by talking over a “bridge”, where data is being sent back and forth between the two.

This isn't something that you will actively be aware of unless you need to write native code for your app.

### CREATE APP WITH `react-native init`
_**Attendees DO NOT need to follow along on their computer yet**_

We will be using a service called Expo that makes this process much simpler
* Make sure Expo is installed on computer & mobile device

### Things needed to build & run RN apps locally:

Mac (iOS & Android)
* Node (4+), Watchman, React Native CLI, Xcode, Java SE Development Kit, and Android Studio

Windows (Android only)
* Node (4+), React Native CLI, Python2, Java SE Development Kit, and Android Studio

Example project
* `react-native init airshipApp`
* `cd airshipApp`
* `react-native run-ios`

Packager opens up automatically
* This is automatically packaging your JS so it can be read by the app
* If any new libraries are added to the app, this will need to be shutdown and restarted

Developer Menu
* Shake device to open or `⌘D` on iOS
* Remote JS Debugging

Errors & Warning
* Error message will show in red
* Warnings are yellow

### EXPO

Expo is a company that developed a tool built around RN to make a seamless development environment with minimal setup required.

It also provided many commonly used native APIs by default without any of the configuration that might come with each (Maps, Camera, etc)

Problems that Expo solves:
* No need for Xcode or Android Studio
* Provides more common UI components not included with RN by default
* Takes care of services that are typically difficult to deal with:
  * Push Notifications, Manage builds, Deployment, Over-the-air updates, etc.

Expo Limitations:
* No native code can be added (manually or by a 3rd party library)
* No background code execution when app is closed (geolocation, playing music, etc)

### CREATE APP WITH EXPO

**_Attendees WILL need to follow along now_**

* Open Expo XDE on computer
* Login to Expo
* Click “Create new project...”
* Use “Blank” and call the project `to-dont`
  * Instead of building a typical “To Do” app, we're going to build a “To Don't” app because we need help remembered what not to do.
* Select directory where you want to put project & Continue
* Project will be created & then automatically start the packager inside the XDE
* Click “Share” and scan the QR code with the Expo app on your phone
* Packager show the JS being initially built & then the app starts on your device
* It took 1 minute to get from creating the project to running on device!
* Open up `App.js` in your code editor and make a change to the text. Save, and see that the change is immediately reflected on your device.

**NOTE: SWITCH TO LAN**

* Click the gear icon next to the address, and select "Host", and then "LAN"
* This will help Expo load the app faster over our office network with this many devices
* **MOBILE DEVICE & COMPUTER MUST BE ON SAME NETWORK FOR THIS TO WORK**

### EXPO TROUBLESHOOTING

If any issues arise, a few things to try:
* Restart the packager in the XDE
* Close out the Expo app on your device and reopen/rescan

### Q & A

* Find Airship builder or ask in chat if you have any tooling issues during this time

## PART 2 - ES6/ES7, JSX, REACT NATIVE COMPONENTS & COMPONENT LIFECYCLE

RN is compiled with Babel by default and comes with new ES6/ES7 syntax you can use.

### COMMONLY USED SYNTAX FROM ES6/ES7

#### `import`
* Refactor app to `import React, { Component } ...`

#### `class`

JavaScript classes aren't exclusive to React & RN, but the frameworks recently started leveraging the new funtionality they offer (inheritance, declarations, etc).

Both frameworks are possible without it, but the addition greatly enhances the developer experience.

#### `const` & `let`

Replacements for `var`

`const` is a signal that the identifier won’t be reassigned.

`let`, is a signal that the variable may be reassigned.It also signals that the variable will be used only in the block it’s defined in.

No more reason to use `var`.

#### Arrow Functions

```
function addOne(value) {
  return value + 1;
};

const addOne = (value) => {
  return value + 1;
};

const addOne = value => value + 1;
```

* Named functions can be assigned to a variable
* If returning a value immediately, `{ return ... }` isn't needed.
* If there is only one parameter, the parenthesis aren't required either.

Aside from being more pleasant to read/write, arrow functions also have no binding of `this`, which helps with various issues commonly encountered.

#### Destructuring

```
// Old Way
var email = currentUser.email;
var name = currentUser.name;

// New Way
const { name, email } = currentUser;

const { BADLYFORMATTED: goodlyFormatted } = response;

console.log(goodlyFormattedProp);

```

Take properties out of an object and assign them to a variable with the same name.

You can also assign them to different variables and still use destructuring.

#### Object Spread

```
const currentUser = {
  name: 'Alex',
  email: 'alex@teamairship.com'
};

// Old Way
const updatedUser = Object.assign(
  {},
  currentUser,
  { role: 'Builder' }
);

// New Way
const updatedUser = { ...currentUser, role: 'Builder' };
```

Takes an object and "spreads" it out into another object.

This is helpful to create a new object without changing the original.


#### Template Literals

```
// Old Way
var welcome = 'My name is ' + firstName + ' ' + lastName '.';

// New Way
const welcome = `My name is ${firstName} ${lastName}.`;

console.log(welcome); // My name is Alex Hinson.
```

Wrap a string with backticks `` and then use ${...} to insert a javascript expression.

This replaces the need to create confusing string concatenations.

### JSX

JSX is a syntax used by React & RN that looks similar to HTML.

Look at starter code in app with `View` and `Text`

All common components from RN will have a `style` property that can adding styling. We will get into styling in the next section.

One limitation currently is that you must return only one JSX element

```
return (
  <View>
    <Text>Alex</Text>
  </View>
);
```

However in React 16 (not yet officially used in RN) you can return multiple items, which eliminates the need to have a “containing” `View`, or `div` in React.

### REACT NATIVE COMPONENTS

Building blocks for creating UIs

### `View`

The basic component for building UI (see starter code)

Similar to `div` with HTML

### `Text`

Used to display text (see starter code)

### `Image`

### `ScrollView`

Notice in the app currently, if you try to scroll it won't move.

* import `ScrollView` and replace the `View`
  * This will cause an error because there are there are certain styles that some components cannot take it.
  * Comment out the `alignItems` and `justifyContent` styles

Also accepts a `horizontal` property
* Change back to a `View` and uncomment styles

### Touchables

`TouchableOpacity`, `TouchableHighlight`, `TouchableWithoutFeedback`

These are how you can create buttons to press, or just general areas that you want to respond to touch.

They each behave a little bit differently, but we will mainly be using `TouchableOpacity` for this session.

* import `TouchableOpacity` and wrap Text

Notice that now the text has a nice opacity when you press it

Has an `onPress` property that is the callback when the `TouchableOpacity` is pressed.
* This is where you would trigger a specific action (API request, show modal, etc.)
* `<TouchableOpacity onPress={() => console.log('PRESSED')}>`

### Other Common RN Components
* ActivityIndicator
* FlatList
* Modal
* StatusBar
* Switch
* TextInput
* more...

### LIFECYCLE METHODS

Lifecycle methods are used in class components to give you hooks into the component at various stages of the UI being rendered to the screen.

`render` is what is actually rendering the elements to the screen. It is the only required method when using a class component.
* Must return something

`componentDidMount`
* This is typically where you would fetch data from API or setup more data for the component

Other lifecycle methods (we will not use them today)
* `componentWillMount`
* `componentWillReceiveProps`
* `shouldComponentUpdate`
* `componentWillUpdate`
* `componentDidUpdate`
* `componentWillUnmount`

### Q & A and short break

## PART 3 - BUILDING & STYLING FIRST SCREEN

As mentioned earlier, we're going to build a “To Don't” app that we can create a list of things that we want to remember NOT to do. In addition, we'll also create a counter for each item so we can keep track of the number of times we (unfortunately) did it.

Make sure you checkout the repo:

https://github.com/teamairship/react-native-primer
* This will contain all of the code we're writing today as well as the notes to follow along

You should also get:
*  the sample data from `data.js`
* The images `add.png` and `close.png` in the `assets` folder

### STYLES

All core RN components will have a `style` property.

The style names & values themselves are mostly the same as CSS on the web expect the properties are written in camel case.
* `backgroundColor` instead of `background-color`
* See starter code for examples

`StyleSheet` is a way to create an object of styles that can be used in the UI.
* We could also just use a plain object as the styles and the app would function the same.
* Without going into to specifics, `StyleSheet` isn't required, but as your app grows, this will help with general performance.

### HEIGHT/WIDTH & FLEX

We can use `height` and `width` properties to position components
* Remove all JSX expect containing `View` and add 3 views with styles
* Be sure to remove `alignItems` and `justifyContent` from `container` style

We want the middle view to be twice the size of the top, and the bottom to be twice the size of the middle.

```
// App.js

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top} />
        <View style={styles.middle} />
        <View style={styles.bottom} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  top: {
    height: 100,
    backgroundColor: 'dodgerblue'
  },
  middle: {
    height: 200,
    backgroundColor: 'greenyellow'
  },
  bottom: {
    height: 400,
    backgroundColor: 'yellowgreen'
  }
});
```

This isn't dynamic to different screen sizes. We need a better solution to distribute the views evenly with the proportions we want.

We could use a percentage for the height here, but it is generally preferred to use `flex` to set relative size.

The flex number given to a component will determine its size relative to its siblings' flex numbers.

```
top: {
  flex: 1,
  backgroundColor: 'dodgerblue'
},
middle: {
  flex: 2,
  backgroundColor: 'greenyellow'
},
bottom: {
  flex: 4,
  backgroundColor: 'yellowgreen'
}
```

Also notice the `container` has a `flex: 1` , but it has no siblings.

This is a common practice to make sure a component is filling up all of the available space.

### ADD HEADER TO SCREEN

```
...

return (
  <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.headerText}>TO-DON'T</Text>
    </View>
    <View style={styles.top} />
    <View style={styles.middle} />
    <View style={styles.bottom} />
  </View>
);

...

header: {
  backgroundColor: '#FF4200',
  height: 80,
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 10
},
headerText: {
  color: '#ffffff',
  fontSize: 20,
  fontWeight: 'bold'
},

...
```

Notice that we aren't add a `flex` value to the header. It has a fixed height. All of the other sibling views adjust their size to fill up the remaining space, but still maintain their ratio setup by `flex`.

You also might not be familiar with the styles `justifyContent` and `alignItems`. These are from Flexbox, which is how RN handles layout.

### FLEXBOX

*Show examples of each item/options below*

You will normally use a combination of `flexDirection`, `alignItems`, and `justifyContent` to achieve the right layout.

`flexDirection` is typically placed on containing components to determine the direction their children are rendered.
* `row` and `column`

Adding `justifyContent` to a component's style determines the **distribution** of children along the **primary axis**. Should children be distributed at the start, the center, the end, or spaced evenly? Available options are `flex-start`, `center`, `flex-end`, `space-around`, and `space-between`.

Adding `alignItems` to a component's style determines the **alignment** of children along the **secondary axis** (if the primary axis is `row`, then the secondary is `column`, and vice versa). Should children be aligned at the start, the center, the end, or stretched to fill? Available options are `flex-start`, `center`, `flex-end`, and `stretch`.

### PLATFORM

To create a better experience for each platform, it is generally a good idea to use platform-specific code. This can be used anywhere in your app, but it is also very helpful specifically with styles.

You can also have platforms use entirely different component files, if desired
* iOS would use `Item.ios.js` and Android would use `Item.android.js`

* import `Platform`

```
header: {
  backgroundColor: '#FF4200',
  height: Platform.OS === 'ios' ? 80 : 70,
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: Platform.OS === 'ios' ? 10 : 20
},
```

### BUILD LIST WITH FLATLIST

* import `FlatList`
* Remove the example views & styles

`FlatList` is a core component from RN that efficiently renders lists.

```
// App.js

...

import data from './data';

...

<FlatList
  data={data}
  renderItem={() => <Text>Item</Text>}
/>
```

This will cause an warning saying there are “missing keys”

When rendering lists in React/RN, a `key` is needed so that React knows which item to update if data changes. It isn't necessarily something you need to be actively aware of, but just know that keys are required.

Ideally, the key would be some unique ID for an item, but for our purposes we will just use the title.

`Flatlist` by default will look for a property called `key` in the object, but it also has a `keyExtractor` that you can specify the key you want it to use.

```
<FlatList
  data={data}
  keyExtractor={item => item.title}
  renderItem={() => <Text>Item</Text>}
/>
```

### `renderItem`

render function that is called for each item in array

Take a look at what is available:

```
renderItem={todo => {
  console.log(item);
  return <Text>Item</Text>;
}}
```

We have an `index`, `item`, and `separators`

We only care about the `item` for now, so we can destructure it right in the parameter

```
renderItem={({ item }) => {
  return <Text>{item.title}</Text>;
}}
```

To render javascript expressions inside text, you just wrap it with `{ ... }`

```
...

renderItem={({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );
}}

...

itemContainer: {
  height: 50,
  justifyContent: 'center',
  paddingLeft: 30,
  borderBottomWidth: 2,
  borderColor: '#f9f9f9'
},
itemText: {
  fontWeight: '600'
}

...
```

### STATUS BAR

The status bar at the top of the screen is currently black text, but it would look better if it matched the header text in white.
* import `StatusBar`

```
componentDidMount() {
  StatusBar.setBarStyle('light-content');
}
```

### Q & A

## PART 4 - REFACTOR & FINISH BUILDING APP

Lets refactor `renderItem` to its own component that we will import.

* Create new file called `Item.js`

We're going to build this component a little bit different than `App.js`

It is going to be a new kind of component called a **_functional component_**

### Refactor `App.js` and add to `Item.js`

```
// Item.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Item = () => {
  return (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>Item Title</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 30,
    borderBottomWidth: 2,
    borderColor: '#f9f9f9'
  },
  itemText: {
    fontWeight: '600'
  }
});

export default Item;
```

```
// App.js

import Item from './Item';
...
renderItem={({ item }) => <Item />}
...
```

If component needs access to state, use class. (We will discuss state next)

Unnecessary complexity is a reason to use functional component when possible.

To pass properties to components, just add the props you want to send:

```
renderItem={({ item }) => (
  <Item title={item.title} />
)}
```

Functional components will always take in `props` as a parameter

```
const Item = props => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{props.title}</Text>
    </View>
  );
};
```

### ADDING AN ITEM

We need some way to add items to this list.

We'll create a button that, when pressed, opens a modal. The modal will contain a text field to enter in a new item and then submit, which will add the item to the list and close the modal.

* import `Modal`

```
// App.js

...
renderItemModal() {
  return (
    <Modal>
      <View>
      <Text>MODAL IS SHOWING</Text>
      </View>
    </Modal>
  );
}

...

{this.renderItemModal()}

...
```

Modal is covering entire screen with a white background, and is visible by default.

`<Modal transparent>` will make background transparent, but modal is still showing.
* NOTE: Android requires that Modal's have an `onRequestClose` prop.
  * `onRequestClose={() => {}}`

```
<Modal
  transparent
  onRequestClose={() => {}}
>
```

Lets style the modal with it open by default, and then we will work on triggering when to open it.

To give it the effect of a typical modal we're used to, we need to create an “inner container” inside the outer View.

```
// App.js

...
<Modal
  transparent
  onRequestClose={() => {}}
>
  <View style={styles.modalContainer}>
    <View style={styles.innerContainer}>
      <Text style={styles.modalHeader}>ADD TO-DON'T</Text>
    </View>
  </View>
</Modal>

...

modalContainer: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.3)',
  justifyContent: 'center',
  alignItems: 'center'
},
innerContainer: {
  backgroundColor: 'white',
  width: '80%',
  height: '35%'
},
modalHeader: {
  alignSelf: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 20
},

...
```

### Close button

Make sure `close.png` is in the `assets` folder
* import `Image`

```
// App.js

...

<View style={styles.innerContainer}>
  <Text style={styles.modalHeader}>ADD TO-DON'T</Text>
  <TouchableOpacity style={styles.closeContainer}>
    <Image
      source={require('./assets/close.png')}
      style={styles.closeIcon}
    />
  </TouchableOpacity>
</View>

...

closeContainer: {
  position: 'absolute',
  top: 10,
  right: 10
},
closeIcon: {
  tintColor: 'gray',
  height: 27,
  width: 27
},

...
```

### STATE

We need a way to keep track of the visibility of the modal. One common solution is to store a value in the component's local state.

We can initialize state in a couple of different ways.

It can be done in the `constructor` method of a class component:

```
constructor(props) {
  super(props);
  this.state = { showModal: false };
}
```

Or, in RN via a Babel transformation, we can use “class properties”:

```
class App extends Component {
  state = { showModal: false };

  ...
}
```

```
<Modal
  transparent
  onRequestClose={() => {}}
  visible={this.state.showModal}
>
```

Now our modal's visibility is being controlled by our component's local state

### ADD ITEM BUTTON

* Add a button to the header
  * Be sure to have the `add.png` file in the `assets` folder

```
// App.js

...

<View style={styles.header}>
  <Text style={styles.headerText}>TO-DON'T</Text>
  <TouchableOpacity
    style={styles.addContainer}
  >
    <Image
      source={require('./assets/add.png')}
      style={styles.addIcon}
    />
  </TouchableOpacity>
</View>

...

addContainer: {
  position: 'absolute',
  top: 32,
  right: 30
},
addIcon: {
  tintColor: 'white',
  height: 29,
  width: 29
},

...
```

### SET STATE

React gives us a method `setState` that we can use to update the current state of the component. Once the state is changed, the component will rerender to reflect the new state.

* Add this to the button we just added:

```
<TouchableOpacity
  style={styles.addContainer}
  onPress={() => this.setState({ showModal: true })}
>
```

* Also add `onPress` to the close icon in the modal:

```
<TouchableOpacity
  style={styles.closeContainer}
  onPress={() => this.setState({ showModal: false })}
>
```

Now we can open and close our modal, and also keep track of its state.

To make the transition a bit smoother when opening/closing the modal, we can add a default animation to it:

```
<Modal
  animationType="fade"
  transparent
  onRequestClose={() => {}}
  visible={this.state.showModal}
>
```

### ADD BUTTON - MODAL

* Add an “add” button to the modal inside the `innerContainer`

```
onAdd() {
  this.setState({ showModal: false });
}

...

<View style={styles.innerContainer}>
  <Text style={styles.modalHeader}>ADD TO-DON'T</Text>

  <TouchableOpacity
    style={styles.addButtonContainer}
    onPress={() => this.onAdd()}
  >
    <Text style={styles.addButtonText}>ADD</Text>
  </TouchableOpacity>

  ...

</View>

...

innerContainer: {
  ...
  justifyContent: 'space-between'
},

...

addButtonContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FF4200',
  padding: 20
},
addButtonText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 20
},

...
```

### TEXT INPUT TO ADD ITEM
* import `TextInput`

```
...

<Text style={styles.modalHeader}>ADD TO-DON'T</Text>
<TextInput
  style={styles.input}
  placeholder="Type your to-don't here"
/>

...

input: {
  backgroundColor: '#f9f9f9',
  marginHorizontal: 20,
  fontSize: 20,
  padding: 15
},
...
```

We can also store the value of this input in state, which will make this input “controlled” by state:

```
...

state = {
  input: '',
  showModal: false
};

...

<TextInput
  style={styles.input}
  placeholder="Type your to-don't here"
  value={this.state.input}
  onChangeText={value => this.setState({ input: value })}
/>

...
```

Every time the value changes, it is updating state, and the value is being reflected in the Input.

### ADD ITEM & UPDATE STATE

If we want to update the list of items, we also need to keep track of the list's data in state as well.

We can initialize the list into state when the component mounts, and then have better control over the data showing in the app.

```
...

state = {
  input: '',
  list: [],
  showModal: false
};

...

componentDidMount() {
  StatusBar.setBarStyle('light-content');
  this.setState({ list: data });
}

...

<FlatList
  data={this.state.list}
  ...
/>

...
```

* Update `onAdd` to add new item to list
* use spread operator to create new list array based on previous state and use setState:

```
onAdd() {
  const newItem = {
    title: this.state.input
  };

  const newList = [...this.state.list, newItem];

  this.setState({
    showModal: false,
    input: '',
    list: newList
  });
}
```

Now when we press “ADD” our new item is added to the list

### DELETE ITEM

We want to be able to swipe each item to the left to reveal a “delete” button.

We could create this component ourselves, but there are a number of great RN components that are open-sourced that will do the job.

Lets add `react-native-swipeable`
* https://github.com/jshanson7/react-native-swipeable
* `npm install --save react-native-swipeable`
* import `Image` & `TouchableOpacity`
* restart packager
* Go to github to see how it is used

```
// Item.js

...

import Swipeable from 'react-native-swipeable';

...

return (
  <Swipeable
    rightButtons={[
      <TouchableOpacity style={styles.deleteContainer}>
        <Image
          source={require('./assets/close.png')}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    ]}
  >
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Item Title</Text>
    </View>
  </Swipeable>
);

...

deleteContainer: {
  backgroundColor: 'red',
  flex: 1,
  justifyContent: 'center',
  paddingLeft: 10
},
deleteIcon: {
  tintColor: 'white',
  height: 20,
  width: 20,
  resizeMode: 'contain'
},
...
```

### Add `onDelete` prop to `Item`

```
// App.js

...

onDelete() {
  // TODO
}

...

<FlatList
  ...
  renderItem={({ item }) => (
  <Item title={item.title} onDelete={() => this.onDelete(item)} />
  )}
/>

...
```

```
// Item.js

...

<TouchableOpacity
  style={styles.deleteContainer}
  onPress={props.onDelete}
>

...
```

### Update `onDelete` to remove selected item

We can use the `filter` array method

```
// App.js

...

onDelete(item) {
  const filteredList = this.state.list.filter(
    todo => todo.title !== item.title
  );
  this.setState({ list: filteredList });
}

...
```

### ANIMATION


When removing an item, the animation is a little rigid currently.

RN exposed a couple of ways to use animation, but `LayoutAnimation` is the simplest to implement.

* import `LayoutAnimation`

```
// App.js

...

onDelete(item) {
  const filteredList = this.state.list.filter(
    todo => todo.title !== item.title
  );

  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  this.setState({ list: filteredList });
}

...
```

This will make the next render use the `easeInEaseOut` animation

**NOTE: EXTRA STEPS FOR ANDROID**

For Android animations to works, we need to add the follow:

* import `NativeModules`

```
import {
  ...
  NativeModules,
  ...
} from 'react-native';

...

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component {
...
```

`Item`'s text also needs to be transparent to not cover up the delete button when animating:

```
...

title: {
  backgroundColor: 'transparent',
  fontWeight: '600'
},

...
```

### ADD COUNTER TO ITEM

Finally, lets add a counter to each item. We can do this when the component mounts with the `map` method:

```
// App.js

...

componentDidMount() {
  StatusBar.setBarStyle('light-content');

  const dataWithCount = data.map(item => ({ ...item, count: 0 }));
  this.setState({ list: dataWithCount });
}

...
```

We also need to add a `count` to `newItem` in the `onAdd` method:

```
onAdd() {
  const newItem = {
    count: 0,
    title: this.state.input
  };

  ...
}
```

* Pass a `count` and `onAdd` prop to `Item`

```
// App.js

...

renderItem={({ item }) => (
  <Item
    count={item.count}
    title={item.title}
    onDelete={() => this.onDelete(item)}
    addCount={() => this.addCount(item)}
  />
)}

...

addCount(item) {
  // TODO
}

...
```

### Show a counter UI on `Item`

```
// Item.js

...

return (
  <Swipeable
    rightButtons={[
      <TouchableOpacity
        style={styles.deleteContainer}
        onPress={props.onDelete}
      >
        <Image
          source={require('./assets/close.png')}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    ]}
  >
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={props.addCount}
        style={styles.countContainer}
      >
        <Text style={styles.count}>{props.count}</Text>
      </TouchableOpacity>
      <Text style={styles.itemText}>{props.title}</Text>
    </View>
  </Swipeable>
);

...

container: {
  ...
  alignItems: 'center', // replace justifyContent
  flexDirection: 'row'
},
countContainer: {
  backgroundColor: 'dodgerblue',
  height: 24,
  width: 24,
  borderRadius: 12,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 8
},
count: {
  color: 'white'
},

...
```

### Add count to Item state

Use `map` method with ternary operator to compare each item and update the specified item

```
// App.js

...

addCount(item) {
  const updatedList = this.state.list.map(
    todo => {
      return todo.title === item.title
        ? { ...todo, count: todo.count + 1 }
        : todo
    }
  );

  this.setState({ list: updatedList });
}

...
```

## We're done with our app! Kind of...

Although we're finished with the app, we've actually left a few remaining bugs that users are likely to encounter:
* A user can add items without any title.
* If two items have the same title and the user deletes one, they both disappear (this also will cause a `key` error).
* There is no way to "undo" a count if the user accidentally clicks the button.
* Each time the app reloads, the data is reset to our sample data.
* Triple digit numbers don't fit inside the count container as cleanly as single & double digits.

Take some time over the next few days to try and figure out solutions for each.

## Other Resources

* [React Native Documentation](http://facebook.github.io/react-native/)
* [React Native Udemy Course](https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/)
* [Ignite Starter Kit](https://github.com/infinitered/ignite)

## What's Next?

* State Management with [**Redux**](https://redux.js.org/)
* Navigation with [**React Navigation**](https://reactnavigation.org/)
* Native Modules with [**Bridging**](https://facebook.github.io/react-native/docs/native-modules-ios.html)
* Testing with [**Jest**](https://facebook.github.io/jest/) & [**Detox**](https://github.com/wix/detox)
* Typechecking with [**Flow**](https://flow.org/en/)
* Linting with [**ESLint**](https://eslint.org/)
