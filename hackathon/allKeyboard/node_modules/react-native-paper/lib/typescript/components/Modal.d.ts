import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type Props = {
    /**
     * Determines whether clicking outside the modal dismiss it.
     */
    dismissable?: boolean;
    /**
     * Callback that is called when the user dismisses the modal.
     */
    onDismiss?: () => void;
    /**
     * Accessibility label for the overlay. This is read by the screen reader when the user taps outside the modal.
     */
    overlayAccessibilityLabel?: string;
    /**
     * Determines Whether the modal is visible.
     */
    visible: boolean;
    /**
     * Content of the `Modal`.
     */
    children: React.ReactNode;
    /**
     * Style for the content of the modal
     */
    contentContainerStyle?: StyleProp<ViewStyle>;
    /**
     * Style for the wrapper of the modal.
     * Use this prop to change the default wrapper style or to override safe area insets with marginTop and marginBottom.
     */
    style?: StyleProp<ViewStyle>;
};
/**
 * The Modal component is a simple way to present content above an enclosing view.
 * To render the `Modal` above other components, you'll need to wrap it with the [`Portal`](portal.html) component.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/modal.gif" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const showModal = () => setVisible(true);
 *   const hideModal = () => setVisible(false);
 *   const containerStyle = {backgroundColor: 'white', padding: 20};
 *
 *   return (
 *     <Provider>
 *       <Portal>
 *         <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
 *           <Text>Example Modal.  Click outside this area to dismiss.</Text>
 *         </Modal>
 *       </Portal>
 *       <Button style={{marginTop: 30}} onPress={showModal}>
 *         Show
 *       </Button>
 *     </Provider>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
export default function Modal({ dismissable, visible, overlayAccessibilityLabel, onDismiss, children, contentContainerStyle, style, }: Props): JSX.Element | null;
export {};
