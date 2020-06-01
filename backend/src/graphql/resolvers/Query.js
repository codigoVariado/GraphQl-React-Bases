import Message from '../../models/Message'

const Query = {
    ping() {
        return 'Pong'
    },

    messages: async  () => {
        return await Message.find()
    }


}

export default Query