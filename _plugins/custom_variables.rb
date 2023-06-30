Jekyll::Hooks.register :site, :after_reset do |site|
    site.config['localhost'] = site.config['url'] == 'http://localhost:4000'
end

