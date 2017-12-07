import './globals';
import Raven from 'raven-js';
import 'bootstrap';


if (Raven) {
  Raven.config('https://fb5b596ad7d24f78ad1708125218cccd@sentry.io/207916').install();
}
