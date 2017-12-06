module Jekyll
    class LoadAsset < Liquid::Tag

        def initialize(tag_name, img, tokens)
            super
            @img = img
        end

        def render(context)
            "#{context.registers[:site].config['assets_url']}#{@img}"
        end
    end
end

Liquid::Template.register_tag('load_asset', Jekyll::LoadAsset)
