import styled from '@emotion/native';
import {Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';

export const Container = styled.View({
  width: Dimensions.get('window').width - scale(50),
  // alignItems: 'center',
  alignSelf: 'center',
});

export const InputsContainer = styled.View({
  flex: 1,
});

export const HorizontalContainer = styled.View({
  flexDirection: 'row',
  width: Dimensions.get('window').width - scale(50),
});

export const DecoratorsContainer = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: scale(7),
});

export const DecoratorCircle = styled.View(({theme}) => {
  return {
    width: scale(7),
    height: scale(7),
    borderRadius: scale(7 / 2),
    backgroundColor: theme.colors.components.destinationModal.decoratorCircle,
  };
});

export const DecoratorLine = styled.View(({theme}) => {
  return {
    width: scale(1),
    flex: 1,
    marginVertical: scale(5),
    backgroundColor: theme.colors.components.destinationModal.decoratorCircle,
  };
});

export const DecoratorSquare = styled.View(({theme}) => {
  return {
    width: scale(7),
    height: scale(7),
    backgroundColor: theme.colors.components.destinationModal.decoratorSquare,
  };
});
