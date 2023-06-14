import {
  Container,
  DecoratorCircle,
  DecoratorLine,
  DecoratorsContainer,
  DecoratorSquare,
  HorizontalContainer,
  InputsContainer,
} from './FlatlistHeader.styles';
import {DestinationInput} from 'components/DestinationInput';
import {Spacer} from 'components/common/Spacer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import {Divider} from 'components/common/Divider';

interface FlatlistHeaderProps {
  destinationValue: string;
  onDestinationTextChange: (text: string) => void;
}

export const FlatlistHeader = ({
  destinationValue,
  onDestinationTextChange,
}: FlatlistHeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Container>
        <Spacer height={insets.top + scale(80)} />
        <HorizontalContainer>
          <DecoratorsContainer>
            <DecoratorCircle />
            <DecoratorLine />
            <DecoratorSquare />
          </DecoratorsContainer>
          <Spacer width={scale(10)} />
          <InputsContainer>
            <DestinationInput disabled placeholder="Current Location" />
            <Spacer height={10} />
            <DestinationInput
              value={destinationValue}
              onChangeText={onDestinationTextChange}
            />
          </InputsContainer>
        </HorizontalContainer>
      </Container>
      <Spacer height={10} />
      <Divider />
    </>
  );
};
