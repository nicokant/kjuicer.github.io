module Assets
    class Generator < Jekyll::Generator
        def generate(site)
            site.config["assets_url"] = "#{site.baseurl}/#{site.config["assets"]}/"
        end
    end
end
