module IO where

import Control.Applicative (class Applicative, class Functor)
import Control.Apply (class Apply)
import Control.Bind (class Bind)
import Control.Monad (class Monad, ap)
import Prelude ((<<<), Unit)

data IO a = IO ((a -> Unit) -> Unit)

unsafe :: forall a. (a -> Unit) -> IO a -> Unit
unsafe ret (IO f) = f ret

pure :: forall a. a -> IO a
pure x = IO (\ret -> ret x)

bind :: forall a b. IO a -> (a -> IO b) -> IO b
bind m f = IO (\ret -> unsafe (\x -> unsafe ret (f x)) m)

map :: forall a b. (a -> b) -> IO a -> IO b
map f m = bind m (pure <<< f)

instance monadIO :: Monad IO

instance applicativeIO :: Applicative IO where
  pure = pure

instance bindIO :: Bind IO where
  bind = bind

instance applyIO :: Apply IO where
  apply = ap

instance functorIO :: Functor IO where
  map = map
