function getUnitSize(max, unit) {
    let config = {}
    for (let i = 1; i <= max; i++) {
        config[i] = `${i}${unit}`
    }
    return config;
}

tailwind.config = {
    theme: {
        extend: {
            colors: {
                clifford: '#da373d',
                homePage: '#7441FD',
                register: '#673DFC',
                fontColor1: '#663CFC',
                fontColor2: '#010101',
                bgColor1: '#934BFF',
                bgColor2: '#5F3AFC',
                bgColor4: ' #663CFC'
            },
            width: getUnitSize(2000, 'px'),
            height: getUnitSize(2000, 'px'),
            fontSize: getUnitSize(200, 'px'),
            margin: getUnitSize(2000, 'px'),
            borderRadius: getUnitSize(1000, 'px'),
            lineHeight: getUnitSize(1000, 'px'),
            padding: getUnitSize(1000, 'px'),
            boxShadow: {
                'homePage': '0px 6px 24px 0px rgba(116,65,253,0.5);',
                'register': '0px 15px 24px 0px rgba(23,3,79,0.1);',
                'allBtn': '0px 6px 24px 0px rgba(116,65,253,0.5);'
            },
            backgroundImage: {
                'dhBg': `linear-gradient(4deg, white, white 50%, transparent 50%, transparent 100%)`,
                'bgColor3': 'linear-gradient(90deg, #934BFF, #5F3AFC);',
                'banner1': `url('images/组 1(1).png')`,
                'plus': 'linear-gradient(90deg, rgba(147,75,255,0.75), rgba(95,58,252,0.75));',
                'dhBg2': `linear-gradient(4deg, transparent 0%, transparent 50%, white 50%, white 100%);`,
                'footerBg1': 'linear-gradient(-67deg, #934BFF, #5F3AFC);'
            }
        }
    }
}

