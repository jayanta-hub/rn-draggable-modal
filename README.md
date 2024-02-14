# rn-draggable-modal

<img alt="npm peer dependency version" src="https://img.shields.io/npm/dependency-version/rn-otp-inputs/peer/react"> <img alt="npm peer dependency version" src="https://img.shields.io/npm/dependency-version/rn-otp-inputs/peer/react-native"> <img alt="npm peer dependency version" src="https://img.shields.io/npm/dependency-version/rn-otp-inputs/peer/prop-types"> <img alt="npm" src="https://img.shields.io/npm/dm/rn-otp-inputs"> <img alt="GitHub" src="https://img.shields.io/github/license/jayanta-hub/rn-otp-inputs">

**rn-draggable-modal** is a tiny Javascript library which provides an elegant UI for the end user to use customize modal. It also features a carefully crafted flow to handle edge cases for volatile user gestures. We provide default UI, but you can always customize the appearance as you like.

## Sample

![Sample](./ios.gif)

## Installation

`npm install --save rn-draggable-modal`

or

`yarn add rn-draggable-modal`

## PeerDependencies

### NOTES:

This packgae will support react@^17.0.0, react@^18.0.0,react-native@^0.68.0,react-native@^0.69.0,react-native@^0.70.0, react-native@^0.71.0. Make sure you have install respective viersion.

`npm install --save react@18.2.0 react-native@0.72.3`

or

`yarn add react@17.0.0 react-native@0.72.3`

## Basic Usage

```
import DraggableModal from 'rn-draggable-modal';

...
const [isHalfModalVisible, setHalfModalVisible] = useState(false);
...
      <DraggableModal
        modalVisible={isHalfModalVisible}
        setModalVisible={setHalfModalVisible}
        dragIconName="dots"
        modalInitialHeight={200}
        dragIconColor="skyblue"
        children={
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: 5,
            }}>
            <Text>Welcome to React Native....</Text>
          </ScrollView>
        }
      />
```

## More Advanced Usage

```
import DraggableModal from 'rn-draggable-modal';

...
const [isHalfModalVisible, setHalfModalVisible] = useState(false);
...
    <DraggableModal
        modalVisible={isHalfModalVisible}
        setModalVisible={setHalfModalVisible}
        dragIconName="dots"
        modalWidth="80%"
        modalInitialHeight={200}
        hasDraggable={false}
        dragIconColor="skyblue"
        numberOfDots={5}
        hasDraggableIcon={false}
         dragIconStyle={{    //dots style
           backgroundColor: 'green',
           width: 8,
           height: 8,
           borderRadius: 4,
           marginHorizontal: 3,
         }}
       children={
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: 5,
            }}>
            <Text>Welcome to React Native....</Text>
          </ScrollView>
        }
      />
```

## Parameters

| Parameter          | Required | Type        | Default                                                                                          | Description                                                 |
| ------------------ | -------- | ----------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| modalVisible       | `Yes`    | `Boolean`   | `false`                                                                                          | The visible prop determines whether your modal is visible.. |
| setModalVisible    | `No`     | `Function`  | `()=>{}`                                                                                         | This callback is called when user taps outside of a Modal.  |
| dragIconName       | `No`     | `String`    | `bar`                                                                                            | `dragIconName` can be bar or dots.                          |
| modalWidth         | `No`     | `String`    | `100%`                                                                                           | Width of modal in percentage.                               |
| modalInitialHeight | `No`     | `String`    | `50% of screen`                                                                                  | Height of modal at inital render.                           |
| hasDraggable       | `No`     | `Boolean`   | `true`                                                                                           | Enable draggable feature for modal.                         |
| dragIconColor      | `No`     | `String`    | `#A3A3A3`                                                                                        | Change dragIcon Color of modal .                            |
| numberOfDots       | `No`     | `Number`    | `3`                                                                                              | Change number of dots in modal.                             |
| hasDraggableIcon   | `No`     | `String`    | `true`                                                                                           | Enable draggable feature for draggable Icon.                |
| dragIconStyle      | `No`     | `String`    | `{{width: 40,height: 6,borderRadius: 3,}}`                                                       | Change the style of the dragIcon.                           |
| children           | `yes`    | `Component` | `<ScrollView contentContainerStyle={{flexGrow: 1}}><Text>This is half modal</Text></ScrollView>` | To render child component within modal.                     |

## Contributing

Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

## Author

![jayanta7381](https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci81ZWZhZGY0MjdjNzliM2YxZDY0ODcxNzI0NjI2NWQzNz9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.Ujb96nLBkk2Z0K5NilEVjWj-0Kpa6NTFeIV8c5Ip-mQ)

[Jayanta Garu](https://github.com/jayanta-hub)

## License

MIT
