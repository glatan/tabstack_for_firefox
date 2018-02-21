# MDNのtabsのところの翻訳的な

## Types

> tabs.MutedInfoReason
* タブがミュートになっている理由を表す
> tabs.MutedInfo
* タブがミュートになっているかどうかと、最後に状態が変更された理由を表す
> tabs.PageSettings
* tabs.saveAsPDF()によってタブのレンダリング設定をコントロールするために使われる
> tabs.Tab
* タブのいろんな情報を含む型(例：ピン留め、タブの高さ...)
> tabs.TabStatus
* タブがロード中かロード完了済みかを表す
> tabs.WindowType
* タブのホストウィンドウのタイプ(よくわかんない)
> tabs.ZoomSettingsMode
* ズーム状態がブラウザで行われるか拡張機能によって行われるか向こうにするかを表す
> tabs.ZoomSettingsScope
* ズーム状態を同じページを元としたページに適応するかタブごとに別々に適応するかを定義する(例：youtubeの動画を複数タブで開いてる場合全部同じズーム倍率にするか別々にするか(多分))
> tabs.ZoomSettings
* ズーム設定モード、スコープ、デフォルトのズーム値を表す

## Properties

> tabs.TAB_ID_NONE
* ブラウザタブじゃないタブに与えられる固有のID

## Functions

> tabs.captureTab()
* 指定されたタブの可視領域のイメージを符号化するデータURIを生成する
> tabs.captureVisibleTab()
* 指定されたウィンドウ内の現在アクティブなタブの可視領域のイメージをエンコードするデータURIを生成する
> tabs.connect()
* 拡張機能のバックグラウンドスクリプト（またはポップアップスクリプトやオプションページスクリプトなどの他の特権スクリプト）と、指定したタブで実行されているコンテンツスクリプトとの間のメッセージング接続を設定する
> tabs.create()
* 新しいタブを作成する
> tabs.detectLanguage()
* タブ内で主として使われている言語を検出する
> tabs.discard()
* 指定したタブを休止する
> tabs.duplicate()
* 同じタブを開く？
> tabs.executeScript()
* 指定したタブで開いているページにJavaScriptを挿入する
> tabs.get()
* 指定したタブの詳細を取得する(tabs.Tabオブジェクトとして)
> tabs.getAllInWindow() 廃止予定
* 指定したウィンドウ内のすべてのタブの詳細を取得する(tabs.Tabオブジェクトとして)
> tabs.getCurrent()
* このスクリプトが実行されているタブに関する情報を取得する(tabs.Tabオブジェクトとして)
> tabs.getSelected() 廃止予定
* 指定されたウィンドウで選択されているタブ情報を取得する(tabs.Tabオブジェクトとして)
> tabs.getZoom()
* 指定したタブの現在のズーム倍率を取得する
> tabs.getZoomSettings()
* 指定したタブの現在のズーム設定を取得する
> tabs.hide() 削除済み
* 指定したタブを隠す
> tabs.highlight()
* 指定したタブを強調表示する
> tabs.insertCSS()
* 指定したタブで開いているページにCSSを挿入する
> tabs.move()
* 指定したタブを同じウィンドウの指定した位置か別ウィンドウに移動する
> tabs.print()
* アクティブなタブを印刷する
> tabs.printPreview()
* アクティブなタブの印刷プレビューを開く
> tabs.query()
* 指定されたプロパティを持つすべてのタブ、プロパティが指定されていない場合はすべてのタブを取得する(tabs.Tabオブジェクトとして)
> tabs.reload()
* タブを再読み込みし、必要に応じてローカルWebキャッシュをバイパスする
> tabs.remove()
* 指定したタブを閉じる
> tabs.removeCSS()
* tabs.insertCSS()によって挿入されたCSSをページから削除する
> tabs.saveAsPDF()
* 開いているページをPDFとして保存する
> tabs.sendMessage()
* 指定したタブのコンテンツスクリプトに1つのメッセージを送信する
> tabs.sendRequest() 廃止予定
* 指定したタブのコンテンツスクリプトに1つの要求を送信する
> tabs.setZoom()
* 指定したタブをズームする
> tabs.setZoomSettings()
* 指定したタブのズーム設定をする
> tabs.show() 廃止済み
* 指定したタブを表示する
> tabs.toggleReaderMode()
* 指定したタブのReaderモードを切り替える
> tabs.update()
* タブを新しいURLに移動するか、タブの他のプロパティを変更する

## Events

> tabs.onActivated
* ウィンドウ内のアクティブなタブが変更されたときに発生する
* このイベントが発生した時点では、タブのURLが設定されていない可能性がある
> tabs.onActiveChanged 廃止予定
* ウィンドウ内の選択されたタブが変更されたときに発生する
> tabs.onAttached
* タブがウィンドウ間で移動され、タブがウィンドウに付け足されたときに発生する
> tabs.onCreated
* タブが作成されたときに発生する
* このイベントが発生した時点では、タブのURLが設定されていない可能性がある
> tabs.onDetached
* ウィンドウ間でタブが移動され、タブがウィンドウから切り離されたときに発生する
> tabs.onHighlightChanged 廃止予定
* ウィンドウのハイライトまたは選択されたタブが変更されたときに発生する
> tabs.onHighlighted
* ウィンドウのハイライトまたは選択されたタブが変更されたときに発生する
> tabs.onMoved
* ウィンドウ内でタブが移動すると発生する
> tabs.onRemoved
* タブが閉じられた時に発生する
> tabs.onReplaced
* プレレンダリングのためにタブが別のタブに置き換えられたときに発生する
> tabs.onSelectionChanged 廃止予定
* ウィンドウ内の選択されたタブが変更された時に発生する
> tabs.onUpdated
* タブが更新された時に発生する
> tabs.onZoomChange
* タブがズームされた時に発生する
