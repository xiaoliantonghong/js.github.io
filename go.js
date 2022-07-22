const urls = [
  'https://www.500dh2.shop',
  'https://www.500dh1.shop',
];



const delaySeconds = 1;

class App extends React.Component {
  urlSuffix = '';
  state = {
    delaySeconds: delaySeconds,
    url: urls[Math.floor(Math.random() * urls.length)],
  };

  constructor() {
    super();
    const hash =window.location.hash.replace(/^#/, '' );
    this.urlSuffix = hash + window.location.search;
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.delayRedirect();
    }, 0);
  };

  delayRedirect = () => {
    if (this.state.delaySeconds > 0) {
      setTimeout(() => {
        this.setState({
          delaySeconds: this.state.delaySeconds - 1,
        }, () => {
          this.delayRedirect();
        });
      }, 1000);
    } else {
      this.redirect();
    }
  };

  redirect = () => {
    window.location.href = this.paramedUrl(this.state.url);
  };

  paramedUrl = (url) => {
    return url + this.urlSuffix;
  };

  render () {
    return (
      <div style={{
        textAlign: 'center'
      }}>
        <div style={{
          color: '#FFFFFF',
		  background: 'url(https://xiaoliantonghong.github.io/yqlj/loading.gif)',
		  width: '160px',
		  margin: '0 auto',
          margintop: '20px'
        }}>.</div>

        <div style={{
          marginBottom: '10px'
        }}>正在打开<font color="#FF0000">500福利导航</font>,請等待{this.state.delaySeconds}秒鐘</div>
		
		 <div style={{
          fontWeight: 'bold',
          fontSize: '12px',
          marginTop: '1px',
          marginBottom: '10px',
        }}><font color="#9e9e9e">頁面如未正常打開，請按F5刷新重試！</font>
		</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
