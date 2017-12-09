module Jekyll
    class LoadAsset < Liquid::Tag

        def initialize(tag_name, img, tokens)
            super
            @img = img
        end

        def render(context)
            "/#{context.registers[:site].config['assets_dir']}/#{context.registers[:site].config['img_dir']}/#{@img}"
        end
    end
end

Liquid::Template.register_tag('load_img', Jekyll::LoadAsset)
