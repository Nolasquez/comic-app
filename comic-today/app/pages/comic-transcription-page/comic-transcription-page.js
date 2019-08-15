{
  const CellsPage = customElements.get('cells-page'); // REMEMBER TO RETRIEVE CellsPage definition!!!

  class ComicTranscriptionPage extends CellsPage { // REMEMBER TO INHERIT FROM CellsPage!!!
    static get is() {
      return 'comic-transcription-page';
    }

    static get properties() {
      return {
        loading: Boolean,
        num: Number,
        transcription: {
          type: Array,
          value: null
        },
        markdown: String,
        emptyTranscription: {
          type: Boolean,
          computed: '_computeEmptyTranscription(loading, transcription)'
        }
      };
    }

    ready() {
      super.ready();

      this._handleConnections();
    }

    _handleConnections() {
      this.publishOn('ch_request_error', this.$.comicDM, 'comic-request-error');
    }

    /**
     * Cells Bridge hook.
     * Will be executed each time user enters on page.
     */
    onPageEnter() {
      this._handleTranscription();
    }

    _handleTranscription() {
      const { num } = this.params;
      const shouldLoadTranscription = (!this.num || this.num && this.num !== num);

      if (shouldLoadTranscription) {
        this.num = num;
        this.loading = true;
        this.$.comicDM.getDetail();
      }
    }

    _formatTranscription(transcription) {
      if (!transcription || transcription === '') {
        return null;
      }

      return transcription.replace(/\n\s*\n/g, '\n').split('\n');
    }

    _handleRequestSuccess(evt) {
      const { detail } = evt;
      const { transcript } = detail;

      this.markdown = this._formatMarkdown(transcript);
      this.transcription = this._formatTranscription(transcript);
      this.loading = false;
    }

    _formatTitle(title) {
      return decodeURI(title).replace(/-/g, ' ');
    }

    _formatMarkdown(transcription) {
      const removeMultipleNewLines = text => text.replace(/\n\s*\n/g, '\n');
      const newLineToLineaBreak = text => text.replace(/\n/g, '<p>');

      return newLineToLineaBreak(removeMultipleNewLines(transcription));
    }

    _computeEmptyTranscription(loading, transcription) {
      return !loading && transcription && transcription.length === 0;
    }

    _handleBackStep() {
      this.navigate('home');
    }
  }

  window.customElements.define(ComicTranscriptionPage.is, ComicTranscriptionPage);
}