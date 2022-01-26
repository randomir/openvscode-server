// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const provider = new LeapLinksViewProvider(context.extensionUri);

  context.subscriptions.push(vscode.window.registerWebviewViewProvider(LeapLinksViewProvider.viewType, provider));
}

class LeapLinksViewProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = "leapLinks.linksView";

  private _view?: vscode.WebviewView;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken,
  ) {
    this._view = webviewView;

    webviewView.webview.options = {
      localResourceRoots: [this._extensionUri]
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
		const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "resources", "css", "main.css"));
    const imgOceanUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "resources", "img", "icon_ocean.svg"));
    const imgCoeUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "resources", "img", "icon_CoE.svg"));
    const imgDocUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "resources", "img", "icon_doc.svg"));
    const imgSupportUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "resources", "img", "icon_support.svg"));
    const imgCommunityUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "resources", "img", "icon_community.svg"));
    const imgDashboardUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "resources", "img", "icon_dashboard.svg"));
    const imgJupyterUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "resources", "img", "icon_jupyter.svg"));

    return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${webview.cspSource}; style-src ${webview.cspSource};">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${styleMainUri}" rel="stylesheet">
				
				<title>Leap Links</title>
			</head>
			<body>
        <div class="menu-container">
          <div class="menu-head">
            <a href="https://cloud.dwavesys.com/leap/" target="_blank" class="logo-link">
              <svg class="logo" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200">
                <path id="Dwave_A" data-name="Dwave A" class="logo-dwave" d="M437.44,125.06a26,26,0,0,1-17.6,6.41H369.78a25.56,25.56,0,0,1-17.45-6.41,21,21,0,0,1-7.28-16.44v-4.07a20.38,20.38,0,0,1,7.57-16.15,25,25,0,0,1,17.16-6.7h31.87V96.83H369.78a9.48,9.48,0,0,0-6,2.19,6.9,6.9,0,0,0-2.76,5.53v4.07c0,5.1,2.91,7.57,8.72,7.57H419.8c6,0,8.87-2.47,8.87-7.57v-39A6.81,6.81,0,0,0,426,64.25a9.3,9.3,0,0,0-6.11-2.33H346.51V46.79h73.33A24.53,24.53,0,0,1,437,53.49c5.1,4.51,7.57,9.89,7.57,16.14v39C444.57,115.32,442.24,120.84,437.44,125.06Z"></path>
                <path id="Dwave_V" data-name="Dwave V" class="logo-dwave" d="M538,108.62c-3.92,15.28-12.07,22.85-24.73,22.85h-21.5c-12.66,0-20.8-7.57-24.73-22.85L451.17,46.79h17l15.28,58.92c1.74,7,5.38,10.48,10.62,10.48H511c5.37,0,9.16-3.49,10.91-10.48L537,46.79h17Z"></path>
                <path id="Dwave_E" data-name="Dwave E" class="logo-dwave" d="M651.86,89.86a25.08,25.08,0,0,1-17.16,6.68h-32V81.27h32a9.47,9.47,0,0,0,5.82-2.18c1.89-1.6,2.91-3.35,2.91-5.38V69.63c0-5.08-2.91-7.71-8.73-7.71H584.5c-5.82,0-8.73,2.63-8.73,7.71v38.85a6.44,6.44,0,0,0,2.77,5.38,8.89,8.89,0,0,0,6,2.33H658v15.13H584.5a25.6,25.6,0,0,1-17.17-6.55,20.88,20.88,0,0,1-7.57-16.29V69.63a20.78,20.78,0,0,1,7.29-16.44,25.57,25.57,0,0,1,17.45-6.4h50.2a26.24,26.24,0,0,1,17.46,6.26,21.1,21.1,0,0,1,7.27,16.58v4.08C659.43,80,657,85.34,651.86,89.86Z"></path>
                <path id="Dot_2" data-name="Dot 2" class="logo-dwave" d="M140.1,89A10.1,10.1,0,1,1,130,78.91h0A10.09,10.09,0,0,1,140.1,89Z"></path>
                <path id="Dot_1" data-name="Dot 1" class="logo-dwave" d="M140.1,56.79A10.1,10.1,0,1,1,130,46.7h0a10.09,10.09,0,0,1,10.1,10.08Z"></path>
                <path id="Dot_4" data-name="Dot 4" class="logo-dwave" d="M173.66,121.23a10.1,10.1,0,1,1-10.11-10.09h0A10.11,10.11,0,0,1,173.66,121.23Z"></path>
                <path id="Dot_3_Blue" data-name="Dot 3 Blue" class="blue-dot" d="M173.66,89a10.1,10.1,0,1,1-10.1-10.1A10.1,10.1,0,0,1,173.66,89Z"></path>
                <path id="Dwave_W" data-name="Dwave W" class="logo-dwave" d="M318,46.79l-15.07,58.68c-1.75,7-5.51,10.44-10.87,10.44H285.6c-5.22,0-9.28-3.72-10.9-10.45l-.17-.44c-4.06-13-15.89-11.85-15.89-11.85-12,.16-16,12.34-16,12.34-1.74,7-5.51,10.4-10.86,10.4h-6.46c-5.21,0-8.84-3.48-10.58-10.44L199.52,46.79h-17l15.79,61.58c3.92,15.22,12,22.75,24.63,22.75H234c12.17,0,20.15-7,24.21-21.18l.35-1.45c3.93,15.09,12.08,22.63,24.64,22.63h11.09c12.6,0,20.72-7.53,24.63-22.75l15.94-61.58Z"></path>
                <path id="Dwave_D" data-name="Dwave D" class="logo-dwave" d="M95.36,125.2a25.45,25.45,0,0,1-17.43,6.42H0V46.71H77.93a24.64,24.64,0,0,1,17,6.72,21,21,0,0,1,7.49,16.19v39.1C102.42,115.44,100.11,121,95.36,125.2ZM86.58,69.62a6.87,6.87,0,0,0-2.74-5.39,8.7,8.7,0,0,0-5.91-2.34H15.7v54.42H77.93c5.76,0,8.65-2.48,8.65-7.59Z"></path>
                <path class="logo-leap" d="M790.42,0a89.51,89.51,0,1,0,89.51,89.51A89.5,89.5,0,0,0,790.42,0Z"></path>
                <path class="logo-leap-l" d="M840,133H769a29,29,0,0,1-19.78-7.25A23.75,23.75,0,0,1,741,107.11V47.37h18.14v59c0,5.78,3.29,8.58,9.89,8.58h71Z"></path>
                <path class="logo-leap" d="M1092.44,53.38a24.53,24.53,0,0,0-17.16-6.7H1002V61.81h73.33a9.23,9.23,0,0,1,6.11,2.33,6.83,6.83,0,0,1,2.76,5.39V81.6h-58.92a25,25,0,0,0-17.17,6.69,20.38,20.38,0,0,0-7.57,16.15v4.07a21,21,0,0,0,7.28,16.45,25.62,25.62,0,0,0,17.46,6.4H1100V69.53C1100,63.27,1097.54,57.89,1092.44,53.38Zm-17.16,62.7h-50c-5.82,0-8.73-2.47-8.73-7.57v-4.07a6.85,6.85,0,0,1,2.77-5.53,9.47,9.47,0,0,1,6-2.18h58.92v11.78c-.09,5.1-3,7.57-9,7.57Z"></path>
                <path class="logo-leap" d="M966,96.43a25.08,25.08,0,0,0,17.16-6.68c5.09-4.51,7.57-9.9,7.57-16.15V69.53a21.14,21.14,0,0,0-7.27-16.59A26.24,26.24,0,0,0,966,46.68H915.85a25.59,25.59,0,0,0-17.46,6.41,20.74,20.74,0,0,0-7.28,16.44v38.84a20.91,20.91,0,0,0,7.56,16.29,25.63,25.63,0,0,0,17.18,6.55h73.47V116.08H915.85a8.89,8.89,0,0,1-6-2.33,6.44,6.44,0,0,1-2.77-5.38V96.43ZM915.85,61.81H966c5.82,0,8.73,2.63,8.73,7.72V73.6A7,7,0,0,1,971.82,79,9.33,9.33,0,0,1,966,81.16H907.11V69.53C907.11,64.44,910,61.81,915.85,61.81Z"></path>
                <path class="logo-leap" d="M1191.65,53.39a24.63,24.63,0,0,0-17-6.71h-63.94V195h15.71V131.59h48.23a25.57,25.57,0,0,0,17.43-6.42c4.75-4.23,7.05-9.77,7.05-16.49V69.59A21,21,0,0,0,1191.65,53.39Zm-8.35,55.29c0,5.11-2.88,7.59-8.64,7.59h-48.23V61.85h48.23a8.68,8.68,0,0,1,5.9,2.34,6.84,6.84,0,0,1,2.74,5.4Z"></path>
              </svg>
            </a>
          </div>
          <a href="https://cloud.dwavesys.com/leap/resources" target="_blank">
            <div class="menu-item">
              <div class="img-wrap">
                <img src="${imgOceanUri}" width="28" height="32" />
              </div>
              <div class="text-block">
                <span class="title">Leap Resources Page</span>
                <span class="desc">Ocean tools and concepts, demos, interactive examples</span>
              </div>
            </div>
          </a>
          <a href="https://cloud.dwavesys.com/leap/examples" target="_blank">
            <div class="menu-item">
              <div class="img-wrap">
                <img src="${imgCoeUri}" width="28" height="32" />
              </div>
              <div class="text-block">
                <span class="title">Collection of Examples</span>
                <span class="desc">Searchable collection of code examples</span>
              </div>
            </div>
          </a>
          <a href="https://docs.ocean.dwavesys.com" target="_blank">
            <div class="menu-item">
              <div class="img-wrap">
                <img src="${imgDocUri}" width="28" height="32" />
              </div>
              <div class="text-block">
                <span class="title">Documentation</span>
                <span class="desc">Ocean software documents</span>
              </div>
            </div>
          </a>
          <a href="https://support.dwavesys.com" target="_blank">
            <div class="menu-item">
              <div class="img-wrap">
                <img src="${imgSupportUri}" width="28" height="32" />
              </div>
              <div class="text-block">
                <span class="title">Support</span>
                <span class="desc">Leap search tool, knowledge base, FAQ</span>
              </div>
            </div>
          </a>
          <a href="https://support.dwavesys.com/hc/en-us/community/topics" target="_blank">
            <div class="menu-item">
              <div class="img-wrap">
                <img src="${imgCommunityUri}" width="28" height="32" />
              </div>
              <div class="text-block">
                <span class="title">Community</span>
                <span class="desc">Leap online community</span>
              </div>
            </div>
          </a>
          <a href="https://cloud.dwavesys.com/leap/" target="_blank">
            <div class="menu-item">
              <div class="img-wrap">
                <img src="${imgDashboardUri}" width="28" height="32" />
              </div>
              <div class="text-block">
                <span class="title">Dashboard</span>
                <span class="desc">Solvers and problem status, usage statistics, API token</span>
              </div>
            </div>
          </a>
          <a href="https://cloud.dwavesys.com/leap/learning" target="_blank">
            <div class="menu-item">
              <div class="img-wrap">
                <img src="${imgJupyterUri}" width="28" height="32" />
              </div>
              <div class="text-block">
                <span class="title">Jupyter Notebooks</span>
                <span class="desc">Interactive examples of problem solving and system features</span>
              </div>
            </div>
          </a>
        </div>
			</body>
			</html>`;
  }
}

// this method is called when your extension is deactivated
// export function deactivate() {}
