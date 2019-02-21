function randomClip() {
    let website = [
        'qV4EzzQFgEg',
        'Gc2uCRU4I4o',
        'vB2h8yF7MQQ',
        '6Am-bqOoIik',
        '5Z128CsA7YM',
        'Hdz4mloUWfs&t=621s',
        'T64eXiw_Xfs',
        '62NbSRFHxko',
        'AqwKVCi9LEs',
        'IyKYsphMiN0',
        'IzUAra8HtOs',
        'lQICxuzDa00',
        'GQ2U1hbY-TI',
        'A15YiQHTyUA',
        '8LDX_e-s1Q8',
        'll7UcK2lZXM',
        '0B_kZHU_bH4'
    ]
    let randweb = Math.floor(Math.random() * website.length)
    
    return `https://www.youtube.com/watch?v=${website[randweb]}`
}

module.exports.randomClip = randomClip