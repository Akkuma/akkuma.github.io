// @refresh reload
import { StartClient, mount } from '@solidjs/start/client';

const el = document.getElementById('app');
if (!el) throw new Error('Element #app not found');

mount(() => <StartClient />, el);
