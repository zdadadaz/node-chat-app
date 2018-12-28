var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage',()=>{
    it('should generate correct message object',()=>{
        var message= {
            from : "test",
            text : "test123"
        };
        var newmessage = generateMessage(message.from,message.text);
        expect(newmessage.from).toBe(message.from);
        expect(newmessage.text).toBe(message.text);
        expect(newmessage.createAt).toBeA('number');
    });
});