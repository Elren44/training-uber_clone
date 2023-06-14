import React from 'react';
import {Modal} from 'react-native';
import {StyledFlatlist} from './DestinationModal.slyles';
import {RoundButton} from 'components/RoundButton';
import {FlatlistHeader} from 'components/DestinationsModal/components/FlatlistHeader';
import {useDestinationModal} from 'components/DestinationsModal/useDestinationModal';

interface DestinationsModalProps {
  visible: boolean;
  closeModal: () => void;
}

export const DestinationModal = ({
  visible,
  closeModal,
}: DestinationsModalProps) => {
  const {models, operations} = useDestinationModal();
  const handleRoundButtonPress = () => {
    closeModal();
  };

  const renderFlatlistItem = () => {
    return null;
  };

  return (
    <Modal onRequestClose={closeModal} visible={visible} animationType="fade">
      <StyledFlatlist
        data={[]}
        renderItem={renderFlatlistItem}
        ListHeaderComponent={
          <FlatlistHeader
            destinationValue={models.destinationInputValue}
            onDestinationTextChange={
              operations.handleDestinationInputTextChange
            }
          />
        }
      />
      <RoundButton icon="arrow-back-outline" onPress={handleRoundButtonPress} />
    </Modal>
  );
};
