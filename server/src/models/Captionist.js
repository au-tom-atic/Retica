const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const CaptionistSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },

  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: "session"
    }
  ],

  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: "class"
    }
  ],

  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.Date

});

module.exports = mongoose.model("captionist", CaptionistSchema);