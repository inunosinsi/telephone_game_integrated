radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    前のグループ = グループ - 1
    if (前のグループ <= 0) {
        前のグループ = 3
    }
    radio.setGroup(前のグループ)
    radio.sendNumber(グループ)
    radio.setGroup(グループ)
})
input.onButtonPressed(Button.B, function () {
    次のグループ = グループ + 1
    if (次のグループ >= 4) {
        次のグループ = 1
    }
    radio.setGroup(次のグループ)
    radio.sendNumber(グループ)
    radio.setGroup(グループ)
})
let 次のグループ = 0
let 前のグループ = 0
let グループ = 0
グループ = 3
radio.setGroup(グループ)
