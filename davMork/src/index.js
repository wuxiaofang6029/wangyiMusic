import dva from 'dva';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/index').default);

// 4. Router
app.router(require('./routes/index').default);

// 5. Start
app.start('#root');