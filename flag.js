#!/usr/bin/env node

const chalk = require('chalk');

const a = chalk.white.bgBlue(' * * * * * * ', chalk.bgRed('                                    \n'));
const b =  chalk.white.bgBlue('  * * * * *  ', chalk.bgWhite('                                    \n'));
const c = chalk.bgWhite('                                                  \n');
const d = chalk.bgRed('                                                  \n');

const flag = [a,b,a,b,a,b,a,c,d,c,d,c,d];

const draw =(line)=>{ 
    process.stdout.write(line)
};

const makeFlag = ()=>{
    flag.forEach(line=>{
        draw(line);
    })
};

makeFlag();