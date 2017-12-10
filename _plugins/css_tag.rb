module Jekyll
    class LoadCss < Liquid::Tag

        def initialize(tag_name, css, tokens)
            super
            @css = css
        end

        def render(context)
            "#{context.registers[:site].config['assets_base_url']}/#{context.registers[:site].config['assets_dir']}/#{context.registers[:site].config['css_dir']}/#{@css.strip!}.css"
        end
    end
end

Liquid::Template.register_tag('load_css', Jekyll::LoadCss)
