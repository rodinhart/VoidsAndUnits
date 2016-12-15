module Array where

foreign import get :: forall a. Int -> Array a -> a

foreign import modify :: forall a. Int -> (a -> a) -> Array a -> Array a

foreign import set :: forall a. Int -> a -> Array a -> Array a
