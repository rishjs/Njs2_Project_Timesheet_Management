
class HelloWorldAction extends baseAction {

  async executeMethod() {
    
    try {
      let { inpVals } = this; 
      
      
      this.setResponse('SUCCESS');
      return {};
    } catch (e) {
      console.log(`Error: API: HelloWorld`, e);
      throw e;
    }
  };

}
module.exports = HelloWorldAction;