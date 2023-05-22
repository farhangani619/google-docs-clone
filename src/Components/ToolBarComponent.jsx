import MediaAssets from "../Assets"

const ToolBarComponent = () => {
  return ( <>
        <div
          className="editor-toolbar"
          aria-label="toolbar"
          aria-hidden="false"
          style={{ visibility: "visible;" }}
        >
          <div className="history-wrapper" aria-label="history-control">
            <div className="option-wrapper" title="Undo">
              <img className="icon" src={MediaAssets.undo} alt="" />
            </div>
            <div className="option-wrapper" title="Redo">
              <img className="icon" src={MediaAssets.redo} alt="" />
            </div>
            <div className="option-wrapper" title="Print">
              <img className="icon" src={MediaAssets.print} alt="" />
            </div>
            <div className="option-wrapper" title="SpellCheck">
              <img className="icon" src={MediaAssets.spellcheck} alt="" />
            </div>
            <div className="option-wrapper" title="Paint">
              <img className="icon" src={MediaAssets.paint} alt="" />
            </div>
          </div>
          <div className="block-wrapper" aria-label="block-control">
            <div
              className="dropdown-wrapper block-dropdown"
              aria-expanded="false"
              aria-label="dropdown"
            >
              <a className="dropdown-selectedtext" title="Block Type">
                <span>100%</span>
                <div className="dropdown-arrow"></div>
              </a>
            </div>
            <div
              className="dropdown-wrapper block-dropdown"
              aria-expanded="false"
              aria-label="dropdown"
            >
              <a className="dropdown-selectedtext" title="Block Type">
                <span>Normal</span>
                <div className="dropdown-arrow"></div>
              </a>
            </div>
          </div>
          <div className="fontsize-wrapper" aria-label="font-size-control">
            <div
              className="dropdown-wrapper fontsize-dropdown"
              aria-label="dropdown"
            >
              <a className="dropdown-selectedtext" title="Font Size">
                <span>16</span>
                <div className="dropdown-arrow"></div>
              </a>
            </div>
          </div>
          <div className="fontfamily-wrapper" aria-label="font-family-control">
            <div
              className="dropdown-wrapper fontfamily-dropdown"
              aria-label="dropdown"
            >
              <a className="dropdown-selectedtext" title="Font">
                <span className="fontfamily-placeholder">Font</span>
                <div className="dropdown-arrow"></div>
              </a>
            </div>
          </div>
          <div className="inline-wrapper" aria-label="inline-control">
            <div className="option-wrapper" aria-selected="false" title="Bold">
              <img className="icon" alt="" src={MediaAssets.bold} />
            </div>
            <div
              className="option-wrapper"
              aria-selected="false"
              title="Italic"
            >
              <img className="icon" alt="" src={MediaAssets.italic} />
            </div>
            <div
              className="option-wrapper"
              aria-selected="false"
              title="Underline"
            >
              <img className="icon" alt="" src={MediaAssets.underline} />
            </div>
            <div
              className="option-wrapper"
              aria-selected="false"
              title="TextColor"
            >
              <img className="icon" alt="" src={MediaAssets.textColor} />
            </div>
            <div
              className="option-wrapper"
              aria-selected="false"
              title="HighlightColor"
            >
              <img className="icon" alt="" src={MediaAssets.highlightColor} />
            </div>
          </div>

          <div className="list-wrapper" aria-label="list-control">
            <div className="option-wrapper" aria-selected="false" title="Link">
              <img className="icon" src={MediaAssets.link} alt="" />
            </div>
            <div
              className="option-wrapper option-disabled"
              aria-selected="false"
              title="AddComment"
            >
              <img className="icon" src={MediaAssets.addComment} alt="" />
            </div>
            <div className="option-wrapper" aria-selected="false" title="Image">
              <img className="icon" src={MediaAssets.image} alt="" />
            </div>
            <div
              className="option-wrapper"
              aria-selected="false"
              title="TextAlign"
            >
              <img className="icon" src={MediaAssets.leftTextAlign} alt="" />
              <div className="dropdown-arrow arrow-position"></div>
            </div>
            <div
              className="option-wrapper"
              aria-selected="false"
              title="LineSpacing"
            >
              <img className="icon" src={MediaAssets.lineSpacing} alt="" />
            </div>
            <div
              className="option-wrapper"
              aria-selected="false"
              title="Checklist"
            >
              <img className="icon" src={MediaAssets.checklist} alt="" />
              <div className="dropdown-arrow arrow-position"></div>
            </div>
            <div
              className="option-wrapper"
              aria-selected="false"
              title="Bullets"
            >
              <img className="icon" src={MediaAssets.bullets} alt="" />
              <div className="dropdown-arrow arrow-position"></div>
            </div>
            <div
              className="option-wrapper"
              aria-selected="false"
              title="NumberedList"
            >
              <img className="icon" src={MediaAssets.numberedList} alt="" />
              <div className="dropdown-arrow arrow-position"></div>
            </div>
            <div className="option-wrapper " title="DecreaseIndent">
              <img className="icon" src={MediaAssets.decreaseIndent} alt="" />
            </div>
            <div className="option-wrapper " title="IncreaseIndent">
              <img className="icon" src={MediaAssets.increaseIndent} alt="" />
            </div>
            <div className="option-wrapper " title="ClearFormatting">
              <img className="icon" src={MediaAssets.clearFormatting} alt="" />
            </div>
          </div>
        </div>
      </>
  )
}

export default ToolBarComponent