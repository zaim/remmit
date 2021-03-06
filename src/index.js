'use strict';

// Core classes
import AccessToken from './core/AccessToken';
import Endpoint from './core/Endpoint';
import Engine from './core/Engine';
import Engine from './core/Engine';
import Request from './core/Request';
import ValueEmitter from './core/ValueEmitter';
import Watcher from './core/Watcher';

// Default Endpoint subclasses
import Subreddit from './endpoints/Subreddit';
import Thread from './endpoints/Thread';


/**
 * Wrapper for instansiating `Engine` with
 * pre-registered endpoint subclasses.
 */

class Reddit extends Engine {
  constructor(...args) {
    super(...args);
    Thread.register(this);
    Subreddit.register(this);
  }
}

export {
  AccessToken,
  Endpoint,
  Engine,
  Reddit,
  Request,
  ValueEmitter,
  Watcher,
  Thread,
  Subreddit
};
