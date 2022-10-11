let theme = localStorage.getItem('theme');

const modeSwitchingButton = document.querySelector('.mode');

modeSwitchingButton.addEventListener('click', () => {
      if (theme === 'dark') {
        document.querySelector('body').classList.remove('dark');
        document.querySelector('header').classList.remove('dark');
        document.querySelector('#query').classList.remove('dark');
        document.querySelector('#region').classList.remove('dark');
        document.querySelectorAll('li').forEach(li => li.classList.remove('dark'));
        document.querySelectorAll('li a').forEach(a => a.classList.remove('dark'));
        modeSwitchingButton.classList.remove('dark');
        document.querySelector('i').classList.remove('fa-solid');
        document.querySelectorAll('.detail-button').forEach(btn => btn.classList.remove('dark'));
        
        document.querySelector('body').classList.add('light');
        document.querySelector('header').classList.add('light');
        document.querySelector('#query').classList.add('light');
        document.querySelector('#region').classList.add('light');
        document.querySelectorAll('li').forEach(li => li.classList.add('light'));
        document.querySelectorAll('li a').forEach(a => a.classList.add('light'));
        modeSwitchingButton.classList.add('light');
        document.querySelector('i').classList.add('fa-regular');
        document.querySelectorAll('.detail-button').forEach(btn => btn.classList.add('light'));

        theme = 'light';
      } else {
        document.querySelector('body').classList.add('dark');
        document.querySelector('header').classList.add('dark');
        document.querySelector('#query').classList.add('dark');
        document.querySelector('#region').classList.add('dark');
        document.querySelectorAll('li').forEach(li => li.classList.add('dark'));
        document.querySelectorAll('li a').forEach(a => a.classList.add('dark'));
        modeSwitchingButton.classList.add('dark');
        document.querySelector('i').classList.add('fa-solid');
        document.querySelectorAll('.detail-button').forEach(btn => btn.classList.add('dark'));

        document.querySelector('body').classList.remove('light');
        document.querySelector('header').classList.remove('light');
        document.querySelector('#query').classList.remove('light');
        document.querySelector('#region').classList.remove('light');
        document.querySelectorAll('li').forEach(li => li.classList.remove('light'));
        document.querySelectorAll('li a').forEach(a => a.classList.remove('light'));
        modeSwitchingButton.classList.remove('light');
        document.querySelector('i').classList.remove('fa-regular');
        document.querySelectorAll('.detail-button').forEach(btn => btn.classList.remove('light'));
        theme = 'dark';
      }
      localStorage.setItem('theme', theme);
    })

    if (theme === 'dark') {
      document.querySelector('body').classList.add('dark');
      document.querySelector('header').classList.add('dark');
      document.querySelector('#query').classList.add('dark');
      document.querySelector('#region').classList.add('dark');
      document.querySelectorAll('li').forEach(li => li.classList.add('dark'));
      document.querySelectorAll('li a').forEach(a => a.classList.add('dark'));
      modeSwitchingButton.classList.add('dark');
      document.querySelector('i').classList.add('fa-solid');
      document.querySelectorAll('.detail-button').forEach(btn => btn.classList.add('dark'));
    }

    if (theme === 'light') {
      document.querySelector('body').classList.add('light');
      document.querySelector('header').classList.add('light');
      document.querySelector('#query').classList.add('light');
      document.querySelector('#region').classList.add('light');
      document.querySelectorAll('li').forEach(li => li.classList.add('light'));
      document.querySelectorAll('li a').forEach(a => a.classList.add('light'));
      modeSwitchingButton.classList.add('light');
      document.querySelector('i').classList.add('fa-regular');
      document.querySelectorAll('.detail-button').forEach(btn => btn.classList.add('light'));
    }
