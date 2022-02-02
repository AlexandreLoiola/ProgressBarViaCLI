/*============================================================================
  Copyright(c) 2022 Alexandre Loiola <alexandre.Loiola.741@gmail.comm>
  MIT Licensed
============================================================================*/

const CLIProgressBAr = class {
    constructor(length){
        this.length = length || 100;
        this.bar = [];
        this.progressPercent = 0;
    }
    async progressBar(){
        for(let i=0; i < this.length; i++){
            this.progressPercent += 100 / this.length;

            process.stdout.write("\r[");
            this.bar.push("=")
            process.stdout.write(this.bar.join(''));

            for(let j=0; j < this.length-i; j++){
                process.stdout.write(' ')
            }
            process.stdout.write('] ' + Math.round(this.progressPercent) + '%');
            await new Promise(done => setTimeout(() => done(), 1000));
        }   
    }
}

module.exports = CLIProgressBAr;