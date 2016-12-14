module Array where

foreign import modify :: forall a. Int -> (a -> a) -> Array a -> Array a
