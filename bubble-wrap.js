// Thanks facebook
var audio = 'https://cdn.fbsbx.com/hphotos-xaf1/v/t59.3654-21/11982748_10153645006268774_1506330817_n.mp3/pop.mp3.mp3?oh=808ff9045be18ee918fa6bdc12d1d8aa&oe=5627B5BD&dl=1'

var width = window.innerWidth
var height = window.innerHeight
var radius = 12
var size = radius * 2 + 'px'

var el = d3.select('body').append('div')

var x = 0
var y = 0
var isOdd = false
while (true) {
    if (y > height) {
        break
    }

    el.append('span')
        .style('left', x + 'px')
        .style('top', y + 'px')
        .style('width', size)
        .style('height', size)
        .on('mouseenter', function() {
            d3.select(this)
                .classed('poped', true)
                .on('mouseenter', null)
            new Audio(audio).play()
        })

    x += radius * 2 + 1
    if (x > width) {
        x = isOdd ? 0 : radius
        isOdd = !isOdd
        y += radius * 2 - 1
    }
}
<script>
alert('But wait, there\'s more...');
</script>
